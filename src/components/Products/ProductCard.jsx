import React from 'react'
import { Rating } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export function RatedIcon() {
    return (
        <svg className='w-4 h-4 text-island-spice-600 fill-island-spice-500' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2827 3.45332C11.5131 2.98638 11.6284 2.75291 11.7848 2.67831C11.9209 2.61341 12.0791 2.61341 12.2152 2.67831C12.3717 2.75291 12.4869 2.98638 12.7174 3.45332L14.9041 7.88328C14.9721 8.02113 15.0061 8.09006 15.0558 8.14358C15.0999 8.19096 15.1527 8.22935 15.2113 8.25662C15.2776 8.28742 15.3536 8.29854 15.5057 8.32077L20.397 9.03571C20.9121 9.11099 21.1696 9.14863 21.2888 9.27444C21.3925 9.38389 21.4412 9.5343 21.4215 9.68377C21.3988 9.85558 21.2124 10.0372 20.8395 10.4004L17.3014 13.8464C17.1912 13.9538 17.136 14.0076 17.1004 14.0715C17.0689 14.128 17.0487 14.1902 17.0409 14.2545C17.0321 14.3271 17.0451 14.403 17.0711 14.5547L17.906 19.4221C17.994 19.9355 18.038 20.1922 17.9553 20.3445C17.8833 20.477 17.7554 20.57 17.6071 20.5975C17.4366 20.6291 17.2061 20.5078 16.7451 20.2654L12.3724 17.9658C12.2361 17.8942 12.168 17.8584 12.0962 17.8443C12.0327 17.8318 11.9673 17.8318 11.9038 17.8443C11.832 17.8584 11.7639 17.8942 11.6277 17.9658L7.25492 20.2654C6.79392 20.5078 6.56341 20.6291 6.39297 20.5975C6.24468 20.57 6.11672 20.477 6.04474 20.3445C5.962 20.1922 6.00603 19.9355 6.09407 19.4221L6.92889 14.5547C6.95491 14.403 6.96793 14.3271 6.95912 14.2545C6.95132 14.1902 6.93111 14.128 6.89961 14.0715C6.86402 14.0076 6.80888 13.9538 6.69859 13.8464L3.16056 10.4004C2.78766 10.0372 2.60121 9.85558 2.57853 9.68377C2.55879 9.5343 2.60755 9.38389 2.71125 9.27444C2.83044 9.14863 3.08797 9.11099 3.60304 9.03571L8.49431 8.32077C8.64642 8.29854 8.72248 8.28742 8.78872 8.25662C8.84736 8.22935 8.90016 8.19096 8.94419 8.14358C8.99391 8.09006 9.02793 8.02113 9.09597 7.88328L11.2827 3.45332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
   
export function UnratedIcon() {
    return (
        <svg className='w-4 h-4 text-island-spice-600' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2827 3.45332C11.5131 2.98638 11.6284 2.75291 11.7848 2.67831C11.9209 2.61341 12.0791 2.61341 12.2152 2.67831C12.3717 2.75291 12.4869 2.98638 12.7174 3.45332L14.9041 7.88328C14.9721 8.02113 15.0061 8.09006 15.0558 8.14358C15.0999 8.19096 15.1527 8.22935 15.2113 8.25662C15.2776 8.28742 15.3536 8.29854 15.5057 8.32077L20.397 9.03571C20.9121 9.11099 21.1696 9.14863 21.2888 9.27444C21.3925 9.38389 21.4412 9.5343 21.4215 9.68377C21.3988 9.85558 21.2124 10.0372 20.8395 10.4004L17.3014 13.8464C17.1912 13.9538 17.136 14.0076 17.1004 14.0715C17.0689 14.128 17.0487 14.1902 17.0409 14.2545C17.0321 14.3271 17.0451 14.403 17.0711 14.5547L17.906 19.4221C17.994 19.9355 18.038 20.1922 17.9553 20.3445C17.8833 20.477 17.7554 20.57 17.6071 20.5975C17.4366 20.6291 17.2061 20.5078 16.7451 20.2654L12.3724 17.9658C12.2361 17.8942 12.168 17.8584 12.0962 17.8443C12.0327 17.8318 11.9673 17.8318 11.9038 17.8443C11.832 17.8584 11.7639 17.8942 11.6277 17.9658L7.25492 20.2654C6.79392 20.5078 6.56341 20.6291 6.39297 20.5975C6.24468 20.57 6.11672 20.477 6.04474 20.3445C5.962 20.1922 6.00603 19.9355 6.09407 19.4221L6.92889 14.5547C6.95491 14.403 6.96793 14.3271 6.95912 14.2545C6.95132 14.1902 6.93111 14.128 6.89961 14.0715C6.86402 14.0076 6.80888 13.9538 6.69859 13.8464L3.16056 10.4004C2.78766 10.0372 2.60121 9.85558 2.57853 9.68377C2.55879 9.5343 2.60755 9.38389 2.71125 9.27444C2.83044 9.14863 3.08797 9.11099 3.60304 9.03571L8.49431 8.32077C8.64642 8.29854 8.72248 8.28742 8.78872 8.25662C8.84736 8.22935 8.90016 8.19096 8.94419 8.14358C8.99391 8.09006 9.02793 8.02113 9.09597 7.88328L11.2827 3.45332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
  }

export const ProductCard = ({ product = {} }) => {

    const [rating, setRating] = React.useState(0)
    const [totalReviews, setTotalReviews] = React.useState(0)

    const [imageHover, setimageHover] = React.useState(false)

    return (
        <div className='md:w-[350px] w-[300px] rounded-2xl relative overflow-hidden ml-4 h-[450px] flex flex-col select-none group' onMouseEnter={() => setimageHover(true)} onMouseLeave={() => setimageHover(false)}>

            {product.images.length > 0 && (
                <Link to={`/products/view/${product.url}`} className='w-full flex-1 peer relative overflow-hidden'>

                    <div className='absolute right-0 top-0 p-2 select-none z-50'>
                        <p className='bg-island-spice-100/90 text-island-spice-600 px-4 text-sm py-2 rounded-2xl rounded-bl-none'>{product.price.toFixed(2)} €</p>
                    </div>

                    <div className='group-hover:scale-[105%] absolute w-full h-full z-10 opacity-100 transition-all duration-500'>
                        <img src={product.images[0]} alt={product.name} loading="lazy" className='w-full h-full object-cover transition-opacity duration-500 opacity-100' />
                    </div>

                    <div className={`group-hover:scale-[105%] absolute w-full h-full z-20 transition-all duration-500 ${imageHover ? "opacity-100" : "opacity-0"}`}>
                        <img src={product.images[1]} alt={product.name} loading="lazy" className='w-full h-full object-cover transition-opacity duration-500 opacity-100' />
                    </div>                    

                    <div className={`grid z-50 grid-cols-3 absolute -bottom-full left-0 right-0 w-full p-2 gap-2 group-hover:bottom-0 group-hover:opacity-100 opacity-0 transition-all duration-500`}>
                        {product.images.slice(0, 3).map((image, index) => (
                            <button key={index} className='h-[100px] shadow-2xs cursor-pointer'>
                                <img src={image} alt={product.name} className='w-full h-full object-cover rounded-2xl transition-opacity duration-300' />
                            </button>
                        ))}
                    </div>
                
                </Link>
            )}

            <div className='pt-2 flex justify-between items-center relative pb-4 overflow-hidden'>
                
                <div className={`absolute w-full h-full z-50 group-hover:top-0 group-hover:opacity-100 opacity-0 transition-all duration-500 bg-island-spice-100 left-0 -top-full right-0`}>
                    <button className='flex items-center rounded-2xl gap-2 w-full h-full bg-island-spice-200 hover:bg-island-spice-800 hover:text-island-spice-100 transition-all duration-200 ease-in justify-center text-island-spice-800 cursor-pointer rounded-t-none'>
                        <span className='text-sm uppercase'>Agregar al carrito</span>
                        <svg className='w-4 h-4' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                </div>

                <Link  to={`/productos/view/${product.url}`} className='text-island-spice-800 uppercase font-semibold relative'>{product.name}</Link>
                
                <div className='flex items-center'>
                    <Rating ratedIcon={<RatedIcon />} unratedIcon={<UnratedIcon />} value={rating} readonly className='!cursor-default' />
                    <p className='text-sm pl-1 leading-none text-island-spice-900'>({totalReviews})</p>
                </div>

            </div>

        </div>
    );
};
