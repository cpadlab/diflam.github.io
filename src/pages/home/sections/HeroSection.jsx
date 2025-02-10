import React, { useRef, useState } from 'react';

export const HeroSection = () => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {videoRef.current.pause();} 
            else {videoRef.current.play();}
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="min-h-[50vh] w-full mx-auto overflow-hidden relative">

            <div className="absolute inset-0 w-full h-full">
                <video ref={videoRef} className="w-full h-full object-cover" src="https://www.patta.nl/cdn/shop/videos/c/vp/7f207d16faf04460b32094cc5c4771e2/7f207d16faf04460b32094cc5c4771e2.HD-1080p-7.2Mbps-42070312.mp4?v=0" playsInline preload="true" loop muted autoPlay />
            </div>

            <button onClick={togglePlayPause} className="text-island-spice-50 opacity-50 hover:opacity-100 transition-all duration-200 ease-in block bg-island-spice-950/50 rounded-full p-1 cursor-pointer absolute top-4 right-4">
                {isPlaying ? 
                    <svg className='w-6 h-6' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                : 
                    <svg className='w-6 h-6' width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                }
            </button>

            <div className='absolute bottom-0 left-0 right-0 p-4 pb-2 z-10 text-island-spice-50'>
                <div className='moving-texts-animation w-full flex flex-row gap-20 text-sm uppercase opacity-80 overflow-hidden text-nowrap'>
                    <div className='flex flex-row gap-20'>
                        <p>Envíos gratuitos a partir de 50 €</p>
                        <p>Velas artesanales</p>
                        <p>Inicia sesión para obtener ofertas especiales</p>
                        <p>Únete a nuestra newsletter</p>
                    </div>
                    <div className='flex flex-row gap-20'>
                        <p>Envíos gratuitos a partir de 50 €</p>
                        <p>Velas artesanales</p>
                        <p>Inicia sesión para obtener ofertas especiales</p>
                        <p>Únete a nuestra newsletter</p>
                    </div>
                    <div className='flex flex-row gap-20'>
                        <p>Envíos gratuitos a partir de 50 €</p>
                        <p>Velas artesanales</p>
                        <p>Inicia sesión para obtener ofertas especiales</p>
                        <p>Únete a nuestra newsletter</p>
                    </div>
                </div>
            </div>

        </section>
    );
};
