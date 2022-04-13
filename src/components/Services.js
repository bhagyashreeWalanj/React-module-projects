import React from 'react'
import { ImLocation2 } from 'react-icons/im';

export default function Services() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center mb-6 mx-56 justify-center items-center">
                        {/* <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
                        <h1 className="sm:text-3xl text-4xl font-title1 text-gray-900">Restaurant & event location on the water in the heart of Berlin</h1>
                        <hr className="border-b-1 border-solid border-gray-500 w-10/12 mt-3" />

                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3 flex-col">
                                    <div className="w-8 h-8 mr-3 mb-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                        <ImLocation2 />
                                    </div>
                                    <h2 className="text-gray-900 text-lg uppercase title-font font-medium leading-relaxed"> - Location - </h2>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p className="leading-relaxed text-base">Guerickestr 11, Berlin 10587</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3 flex-col">
                                    <div className="w-8 h-8 mr-3 mb-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                        <ImLocation2 />
                                    </div>
                                    <h2 className="text-gray-900 text-lg uppercase title-font font-medium leading-relaxed"> - Opening hours - </h2>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p className="leading-relaxed text-base">Monday to Sunday
                                        6 p.m. to 11 p.m</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3 flex-col">
                                    <div className="w-8 h-8 mr-3 mb-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                        <ImLocation2 />
                                    </div>
                                    <h2 className="text-gray-900 text-lg uppercase title-font font-medium leading-relaxed"> - events - </h2>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p className="leading-relaxed text-base">Exclusively bookable for up to 200 people</p>
                                </div>
                            </div>
                        </div>
                        <p className="flex flex-auto justify-center items-center">+++ Please note the applicable 2G regulations +++</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
