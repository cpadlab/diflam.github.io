import React from 'react'
import { Link } from 'react-router-dom'

import { SmoothScroll } from '../../components/SmoothScrolll'
import { Logo } from '../../components/Logo'

import { RegisterForm } from './register/RegisterForm'

export const AuthPage = ({ user }) => {

    const [content, setContent] = React.useState("register")

    return (
        <React.Fragment>

            <SmoothScroll _lerp={0.07} />

            <main className='relative min-h-screen grid grid-cols-2'>

                <div className='absolute p-4 top-0 left-0 z-10'>
                    <Link to={"/"}>
                        <Logo className="w-28 fill-island-spice-950" />
                    </Link>
                </div>

                <div className='w-full h-full'>
                    <img src="https://sisuessence.es/cdn/shop/files/6EC11AE9-2C93-4280-9DBE-EB0B9185E000.jpg?v=1707416688&width=1500" className='w-full h-full object-cover' />
                </div>

                {content === "register" && (
                    <RegisterForm setContent={setContent} />
                )}

            </main>

        </React.Fragment>
    )
}
