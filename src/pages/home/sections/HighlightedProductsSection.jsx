import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { db } from '../../../config/firebase';
import { getDoc, doc } from 'firebase/firestore';

import { ProductCard } from '../../../components/Products/ProductCard';

export const HighlightedProductsSection = () => {

    const [products, setProducts] = React.useState([])

    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true })

    React.useEffect(() => {
        const fetchHighlightedProducts = async () => {
            try {

                const publicDoc = await getDoc(doc(db, "server/public"));
                if (publicDoc.exists()) {
                    const data = publicDoc.data();
                    const productRefs = data.highlightedProducts || [];

                    const productPromises = productRefs.map(async (productRef) => {
                        const productDoc = await getDoc(productRef);
                        return productDoc.exists() ? { id: productDoc.id, ...productDoc.data() } : null;
                    });

                    const productsData = (await Promise.all(productPromises)).filter(product => product !== null);
                    setProducts(productsData);
                }
            } catch (error) {
                console.error("Error obteniendo productos destacados:", error);
            }
        };

        fetchHighlightedProducts();
    }, []);

    return (
        <section className='bg-island-spice-100 py-12 mt-12'>
            
            <div className='mb-6'>
                <p className='text-center text-sm uppercase text-island-spice-500 font-light'>Destacados</p>
                <h1 className='text-center text-island-spice-700 text-xl font-bold mt-1 uppercase'>Nuestra selección de productos</h1>
            </div>

            <div className="embla cursor-grab">
                
                <div className="overflow-hidden" ref={emblaRef}>
                    {products && (
                        <div className="flex">
                            {products.map((product, index) => (
                                <div key={index} className="mr-4">
                                    <ProductCard product={product} key={index} /> 
                                </div>
                            ))}
                        </div>
                    )}
                </div>        
            </div>


        </section>
    )
}
