import React from 'react'
import Hero from './Hero';
import Services from './Services';
import SpecialMenus from './SpecialMenus';
import Testimonials from './Testimonials';

export default function Home() {
    return (
        <div>
            <Hero />
            <SpecialMenus />
            <Services />
            {/* <Testimonials /> */}
        </div>
    )
}
