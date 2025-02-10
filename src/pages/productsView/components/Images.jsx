import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { Thumb } from './ImagesThumbs'

export const Images = ({ images }) => {

    const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth >= 1536)

    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel({})
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
        axis: isLargeScreen ? 'y' : 'x'
    })

    const onThumbClick = React.useCallback(
        (index) => {
          if (!emblaMainApi || !emblaThumbsApi) return
          emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )
    
    const onSelect = React.useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    React.useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1536) // 2xl en Tailwind
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    React.useEffect(() => {
        if (!emblaMainApi) return
        onSelect()
    
        emblaMainApi.on('select', onSelect).on('reInit', onSelect)
    }, [emblaMainApi, onSelect])    

    return (
        <section className='flex gap-4 2xl:flex-row flex-col-reverse'>

            <div className="overflow-hidden" ref={emblaThumbsRef}>
                <div className="flex 2xl:flex-col gap-2">
                    {images.map((image, index) => (
                        <Thumb key={index} image={image} onClick={() => onThumbClick(index)} selected={index === selectedIndex} index={index}/>
                    ))}
                </div>
            </div>
            
            <div className="flex-1 overflow-hidden">
                <div className="overflow-hidden" ref={emblaMainRef}>
                    <div className="flex flex-row">
                        {images.map((image, index) => (
                            <div className="relative w-full flex-shrink-0" key={index}>
                                <img src={image} className="w-full h-auto object-cover rounded-2xl" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}
