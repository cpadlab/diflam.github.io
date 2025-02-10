import React from 'react'

import { Header } from '../../components/Header/Header'
import { SmoothScroll } from '../../components/SmoothScrolll'

import { HeroSection } from './sections/HeroSection'
import { Introduction } from './sections/Introduction'
import { HighlightedProductsSection } from './sections/HighlightedProductsSection'

export const HomePage = ({ user }) => {
    return (
        <React.Fragment>

            <SmoothScroll _lerp={0.07} />

            <main className='relative'>
                <HeroSection />
                <Header user={user} />
                <Introduction />
                <HighlightedProductsSection />
                <div className='h-[200vh]'></div>
            </main>

        </React.Fragment>
    )
}
