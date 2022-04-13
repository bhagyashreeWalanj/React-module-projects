import React from 'react'
import { FaUsers, FaGlassCheers, FaApple, FaGooglePlay } from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im'

export default function About() {
    return (
        <div>
            <section className="text-gray-600 font-title1">
                <div className="container mx-auto flex px-5 py-2 pt-14 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="sm:text-4xl text-3xl mb-4 text-gray-900">Our Story About Bruschette's</h1>
                        <h4 className="sm:text-xl text-xl mb-4 text-gray-600">A location like a ship</h4>
                        <p className="mb-8 leading-relaxed">Do you love Berlin and are you looking for a location that also fulfills your longing for water in the middle of the big city? Then visit us soon and spend an unforgettable evening in one of the most beautiful restaurants in Berlin! With us you can set sail without leaving the country. Take an evening to glide seemingly completely detached on the waves of the Spree and sail away into a dreamlike Berlin night...!!</p>
                    </div>
                    <img className="lg:w-3/4 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="./images/Rivo-Spreeterrassen.jpeg" />
                </div>
                <div className="container mx-auto flex px-5 py-2 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">

                        <h1 className="sm:text-4xl text-3xl mb-4 text-gray-900">Excellent cuisine & exquisite drinks</h1>
                        <p className="mb-8 leading-relaxed">WE ARE LOOKING FORWARD TO YOUR VISIT!</p>
                    </div>
                    <img className="lg:w-3/4 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="./images/exotic-drinks.jpeg" />

                </div>

            </section>

            {/* <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Us</h1>
                        <p className="mb-8 leading-relaxed">Explore a variety of Italian food prepared by our experienced chefs and enjoy the best italian restaurant in Berlin. We love serving guests with the traditional italian dishes. At the CafeTail Berlin, we offer authentic Italian cuisines to choose from so you can enjoy your meal</p>
                        <div className="flex flex-row w-full">
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900 flex flex-row justify-center">
                                    <FaUsers className="pr-2 w-10 h-10" style={{ 'color': '#c59d5f' }} />
                                2.7K</h2>
                                <p className="leading-relaxed flex justify-center items-center">Users</p>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900 flex flex-row justify-center">
                                    <ImSpoonKnife className="pr-2 w-10 h-10" style={{ 'color': '#c59d5f' }} />117</h2>
                                <p className="leading-relaxed flex justify-center items-center">Food items</p>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900 flex flex-row justify-center">
                                    <FaGlassCheers className="pr-2 w-10 h-10" style={{ 'color': '#c59d5f' }} />151</h2>
                                <p className="leading-relaxed flex justify-center items-center">Beverages</p>
                            </div>
                            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                <h2 className="title-font font-medium text-3xl text-gray-900 flex flex-row justify-center">
                                    <FaUsers className="pr-2 w-10 h-10" style={{ 'color': '#c59d5f' }} />4</h2>
                                <p className="leading-relaxed flex justify-center items-center">Chains</p>
                            </div>
                        </div>
                        <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Click to Download our new app on play store</p>
                        <div className="flex lg:flex-row md:flex-col">
                            <button className="bg-yellow-400 text-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-yellow-500 focus:outline-none">
                                <FaGooglePlay className="w-6 h-6" />
                                <span className="ml-4 flex items-start flex-col leading-none">
                                    <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                                    <span className="title-font font-medium">Google Play</span>
                                </span>
                            </button>
                            <button className="bg-yellow-400 text-black inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-yellow-500 focus:outline-none">
                                <FaApple className="w-6 h-6" />
                                <span className="ml-4 flex items-start flex-col leading-none">
                                    <span className="text-xs text-gray-600 mb-1">Download on the</span>
                                    <span className="title-font font-medium">App Store</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}
