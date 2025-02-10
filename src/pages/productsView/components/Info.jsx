import React from 'react'
import { Input, Rating } from "@material-tailwind/react";
import { UnratedIcon, RatedIcon } from '../../../components/Products/ProductCard';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Info = ({ product, rating, totalReviews, amount, setAmount }) => {

    const onChange = ({ target }) => setAmount(target.value);

    return (
        <section className='select-none'>
            
            <p className='text-sm uppercase text-island-spice-500 leading-none mb-2 font-light'>{product.category}</p>
            
            <h1 className='text-island-spice-700 text-4xl font-bold leading-none mt-1 uppercase'>{product.name}<span className='font-normal text-3xl'>, {product.price.toFixed(2)}€</span></h1>
            
            <div className='flex items-center mt-2'>
                <Rating ratedIcon={<RatedIcon />} unratedIcon={<UnratedIcon />} value={rating} readonly className='!cursor-default' />
                <p className='text-sm pl-1 leading-none text-island-spice-900'>({totalReviews})</p>
            </div>

            <div className='flex mt-6 relative gap-2 items-center md:w-1/2 flex-col'>
                
                <Input color="black" type="number" label="Cantidad" labelProps={{ className: "!text-island-spice-800 peer-focus:!text-island-spice-900" }} value={amount} onChange={onChange} variant='static' placeholder='0' className='w-1/2 !border-island-spice-300 !focus:border-b-island-spice-500 !text-island-spice-800 ' />
                
                <div className='absolute right-0 top-0 flex items-center gap-2'>
                    <button className='bg-island-spice-100 h-full cursor-pointer rounded-xl py-2.5 px-2.5 uppercase text-xs text-island-spice-800 hover:bg-island-spice-800 hover:text-island-spice-100 transition-all duration-200' onClick={() => setAmount((cur) => cur + 1)}>
                        <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <button className='bg-island-spice-100 h-full cursor-pointer rounded-xl py-2.5 px-2.5 uppercase text-xs text-island-spice-800 hover:bg-island-spice-800 hover:text-island-spice-100 transition-all duration-200' onClick={() => setAmount((cur) => (cur === 1 ? 1 : cur - 1))} >
                        <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                </div>

                <div className='flex items-center gap-2 w-full'>
                    <button className='bg-island-spice-100 h-full justify-center flex-1 cursor-pointer rounded-xl py-2.5 px-2.5 uppercase text-xs text-island-spice-800 hover:bg-island-spice-800 hover:text-island-spice-100 transition-all duration-200 flex items-center gap-2'>
                        <span>Agregar al carrito</span>
                        <svg className='w-3 h-3' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2H3.30616C3.55218 2 3.67519 2 3.77418 2.04524C3.86142 2.08511 3.93535 2.14922 3.98715 2.22995C4.04593 2.32154 4.06333 2.44332 4.09812 2.68686L4.57143 6M4.57143 6L5.62332 13.7314C5.75681 14.7125 5.82355 15.2031 6.0581 15.5723C6.26478 15.8977 6.56108 16.1564 6.91135 16.3174C7.30886 16.5 7.80394 16.5 8.79411 16.5H17.352C18.2945 16.5 18.7658 16.5 19.151 16.3304C19.4905 16.1809 19.7818 15.9398 19.9923 15.6342C20.2309 15.2876 20.3191 14.8247 20.4955 13.8988L21.8191 6.94969C21.8812 6.62381 21.9122 6.46087 21.8672 6.3335C21.8278 6.22177 21.7499 6.12768 21.6475 6.06802C21.5308 6 21.365 6 21.0332 6H4.57143ZM10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20.4477 18 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <button className='hover:bg-island-spice-100 border border-island-spice-300 h-full justify-center cursor-pointer rounded-xl py-2.5 px-4 uppercase text-xs text-island-spice-800  transition-all duration-200 flex items-center gap-2'>
                        <span>Añadir a favoritos</span>
                        <svg className='w-3 h-3' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                </div>

            </div>

            <hr className='border-island-spice-300 my-4' />

            <Markdown remarkPlugins={[remarkGfm]}>{product.description}</Markdown>

        </section>
    )
}
