import React from 'react'
import { Link } from "react-router-dom";
import HeaderLinks from '../mocks/headerLinks';

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font sticky top-0 z-50 bg-gray-200">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-yellow-600 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <Link to="/" className="ml-3 text-xl">Bruschetta's</Link>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        {HeaderLinks.map(menu => {
                            return (
                                <Link key={menu.id} to={menu.path} className="mr-14 text-xl font-title1 hover:text-gray-900 hover:cursor-pointer">{menu.name}</Link>
                            )
                        })}
                    </nav>
                    <button className="inline-flex items-center bg-yellow-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded text-base mt-4 md:mt-0">Sign Up
                    </button>
                </div>
            </header>
        </>
    )
}
