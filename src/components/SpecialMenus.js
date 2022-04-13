import React from 'react'
import SpecialMenu from '../mocks/specialMenus';

export default function SpecialMenus() {


    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Most Special Recommended Menus</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {SpecialMenu.map(menu => {
                            const { id, title, subTitle, image, description } = menu;
                            return (<div className="lg:w-1/3 sm:w-1/2 p-4 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 " key={id}>
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={image} />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-70">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">{subTitle}</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                                        <p className="leading-relaxed">{description}</p>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
