import { Link } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-300 ${isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
            } text-white`}>
            <div className="container mx-auto flex items-center justify-between px-8">
                <div className="flex items-center">
                    <div className="text-xs leading-tight md:block">
                        <img src="/logofest1.png" alt="fest-logo" className='w-56' />
                    </div>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link href="#" className="text-white hover:text-blue-300">
                        Home
                    </Link>
                    <Link href="#aboutus" className="text-white hover:text-blue-300">
                        What We Do
                    </Link>
                    <Link href="#latestevent" className="text-white hover:text-blue-300">
                        Latest Event
                    </Link>
                    <Link href="#careers" className="text-white hover:text-blue-300">
                        Career
                    </Link>
                    <Link href="#contact" className="text-white hover:text-blue-300">
                        Contact
                    </Link>
                </nav>
                <button className="md:hidden text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar