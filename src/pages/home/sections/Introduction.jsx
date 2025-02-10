import React from 'react'
import { Input, ThemeProvider } from "@material-tailwind/react";

export const Introduction = () => {

    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);

    return (
        <section className='px-4 mt-12'>
            <div className='md:w-1/2'>
                
                <div className='border-b border-b-island-spice-100 pb-4'>
                    <h1 className='text-island-spice-700 md:text-left text-center font-bold text-xl uppercase'>Descubre Diflam</h1>            
                    <p className='text-island-spice-500 md:text-left text-center text-sm'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>

                <div className='flex mt-8 relative gap-2 items-center md:w-[60%]'>
                    <Input color="black" type="email" label="Newsletter" labelProps={{ className: "!text-island-spice-800 peer-focus:!text-island-spice-900" }} value={email} onChange={onChange} variant='static' placeholder='Correo electónico' className='w-1/2 !border-island-spice-300 !focus:border-b-island-spice-500 !text-island-spice-800 ' />
                    <div className='absolute right-0 top-0'>
                        <button className='bg-island-spice-100 h-full cursor-pointer rounded-xl py-2.5 px-4 uppercase text-xs text-island-spice-800 hover:bg-island-spice-800 hover:text-island-spice-100 transition-all duration-200'>Subscríbete</button>
                    </div>
                </div>

            </div>
        </section>
    )
}