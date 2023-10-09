"use client";

import React, { useEffect, useState } from 'react'
import { ModeToggle } from './theme-navigator-button';
import { LesftSheetSide } from '@/components/header/sleft-side-navigator';

function Header() {
    const [mobileMenu, setMobileMenu] = useState(false)
    let navClasses = ""
    mobileMenu ? navClasses = "w-full md:block md:w-auto" : navClasses = "hidden w-full md:block md:w-auto";

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isScrolled = scrollPosition > 0;

    return (
        <nav className={`bg-transparent fixed w-full top-0 left-0 z-40 ${isScrolled ? "animate-slide-down shadow-2xl backdrop-blur-3xl bg-[#4DB8EF] bg-opacity-60" : ""}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <section className='flex'>
                    <LesftSheetSide />
                    <a href="/" className="">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Verified Proms</span>
                    </a>
                </section>
                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-solid-bg" aria-expanded="false"
                    onClick={() => setMobileMenu(!mobileMenu)}>
                    <span className="sr-only">menu menu</span>
                    {mobileMenu ? "X" : <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>}
                </button>
                <div className={navClasses} id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent" onClick={() => setMobileMenu(!mobileMenu)}>
                        <li>
                            <a href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-pink-200 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0">About</a>
                        </li>
                        <li>
                            <a href="#service" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-pink-200 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-pink-200 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0">Team</a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-pink-200 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0">Contact</a>
                        </li>
                        <li>
                            <ModeToggle />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;