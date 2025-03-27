import React, { useState } from 'react'
import { Link } from '@inertiajs/react'

const MobileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Toggle Button (matches existing Navbar) */}
            <button
                onClick={toggleMenu}
                className="md:hidden fixed top-6 right-6 z-50 text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu Slide-out Panel */}
            <div
                className={`
                    fixed top-0 right-0 w-64 h-full bg-gray-900 
                    transform transition-transform duration-300 z-50
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="flex flex-col p-6 space-y-4 mt-16">
                    <Link
                        href="#"
                        className="text-white hover:text-blue-300 text-lg"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link
                        href="#aboutus"
                        className="text-white hover:text-blue-300 text-lg"
                        onClick={closeMenu}
                    >
                        What We Do
                    </Link>
                    <Link
                        href="#latestevent"
                        className="text-white hover:text-blue-300 text-lg"
                        onClick={closeMenu}
                    >
                        Latest Event
                    </Link>
                    <Link
                        href="#careers"
                        className="text-white hover:text-blue-300 text-lg"
                        onClick={closeMenu}
                    >
                        Career
                    </Link>
                    <Link
                        href="#contact"
                        className="text-white hover:text-blue-300 text-lg"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MobileNavbar