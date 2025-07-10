import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Adds a class when the user scrolls more than 50px
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = (
        <>
            <Link href="/" className="text-white hover:text-blue-300 transition-colors duration-300">
                Home
            </Link>
            <Link href="/#aboutus" className="text-white hover:text-blue-300 transition-colors duration-300">
                What We Do
            </Link>
            <Link href="/#latestevent" className="text-white hover:text-blue-300 transition-colors duration-300">
                Latest Event
            </Link>
            <Link href="/career" className="text-white hover:text-blue-300 transition-colors duration-300">
                Career
            </Link>
            <Link href="/#contact" className="text-white hover:text-blue-300 transition-colors duration-300">
                Contact
            </Link>
        </>
    );

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
                isScrolled ? 'bg-[#3d0025] shadow-lg' : 'bg-[#4f002f]'
            } text-white`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <img src="/logofest1.png" alt="fest-logo" className="w-48 md:w-56" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} aria-label="Toggle menu">
                        {isMobileMenuOpen ? <X size={24} /> : null}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <nav className="md:hidden mt-4 pt-4 pb-2 border-t border-white/20">
                    <div className="container mx-auto flex flex-col items-center space-y-4 px-8">
                        {navLinks}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Navbar;