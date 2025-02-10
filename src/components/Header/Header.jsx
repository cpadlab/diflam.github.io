import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../Logo'
import { Navbar } from './Navbar'
import { Actions } from './Actions'

export const Header = ({ user }) => {
    return (
        <header className='sticky top-0 left-0 z-[999] right-0 w-full border-b border-b-island-spice-100 grid p-4 items-center lg:grid-cols-5 grid-cols-2 bg-island-spice-950'>

            <Navbar />
            
            <Link to={"/"} className='flex lg:justify-center'>
                <Logo className="w-28 fill-island-spice-50" />
            </Link>

            <Actions user={user} />

        </header>
    )
}
