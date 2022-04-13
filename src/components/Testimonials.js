import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function Testimonials() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <FaQuoteLeft className="block w-5 h-5 text-gray-400 mb-4" />
                                <p className="leading-relaxed mb-6">
                                This place made our trip from hannover to Berlin totally worthwhile.. awesome street food from India,
                                 many of the dishes I have seen only here in Germany.. They absolutely satisfied my long running craving for Indian chaat..
                                  and that at very reasonable prices.. Kudos!! Gonna go here over and over again 🙂
                                
                                </p>

                                <FaQuoteRight className="block float-right w-5 h-5 text-gray-400 mb-4" />

                                <a className="inline-flex items-center">
                                    <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                        <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <FaQuoteLeft className="block w-5 h-5 text-gray-400 mb-4" />

                                <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                <FaQuoteRight className="block float-right w-5 h-5 text-gray-400 mb-4" />

                                <a className="inline-flex items-center">
                                    <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                                        <span className="text-gray-500 text-sm">DESIGNER</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
