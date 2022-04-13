import React from 'react'

export default function Hero() {
    return (
        <div className="w-auto h-[70vh] mx-4 bg-[url('../public/images/hero1.jpg')] bg-center bg-cover bg-no-repeat flex justify-center items-center">
            <div className="w-3/5 bg-gray-500 bg-opacity-30 flex justify-center items-center text-center">
                <h2 className="font-title1 leading-relaxed text-rose-50">The most beautiful Spree terrace Restaurant in Berlin</h2>
            </div>
        </div>
    )
}
