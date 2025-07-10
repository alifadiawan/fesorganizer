import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Search, Globe, Menu, X } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';

// --- Reusable Header Component ---
// Note: This is the same header as before, but now it's used within the main page component.
const AppHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/expertise', label: 'Expertise' },
        { href: '/products', label: 'Products' },
        { href: '/resources', label: 'Resources' },
        { href: '/about', label: 'About Us' },
        { href: '/sustainability', label: 'Sustainability' },
    ];

    const Logo = () => (
        <svg width="80" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="30" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="white">
                LOGO
            </text>
        </svg>
    );

    return (
        <header className="absolute top-0 left-0 w-full bg-red-900/50 text-white font-sans z-10">
            <nav className="container mx-auto px-4 lg:px-6 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/"><Logo /></Link>
                    <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
                        <ul className="flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm font-medium text-red-100 hover:text-white transition-colors duration-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden lg:flex items-center space-x-5">
                        <Link href="/login" className="text-sm font-medium text-red-100 hover:text-white transition-colors duration-300">Login</Link>
                        <button aria-label="Search" className="text-red-100 hover:text-white transition-colors duration-300"><Search size={20} /></button>
                        <Link href="/contact" className="bg-white text-red-900 hover:bg-red-100 font-bold py-2 px-4 rounded-md transition-all duration-300 text-sm">Contact Us</Link>
                        <button aria-label="Language" className="flex items-center text-red-100 hover:text-white transition-colors duration-300">
                            <Globe size={20} /><span className="ml-1 text-sm font-medium">EN</span>
                        </button>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="text-white focus:outline-none">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 p-4 bg-red-900 rounded-lg animate-fade-in-down">
                        <ul className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.href}><Link href={link.href} className="block py-2 text-red-100 hover:text-white" onClick={() => setIsMenuOpen(false)}>{link.label}</Link></li>
                            ))}
                        </ul>
                        <div className="border-t border-red-800 mt-6 pt-6 flex flex-col space-y-4">
                            <Link href="/login" className="text-red-100portfolio.thumbnail hover:text-white">Login</Link>
                            <button aria-label="Search" className="flex items-center text-red-100 hover:text-white"><Search size={20} className="mr-2" /> Search</button>
                            <Link href="/contact" className="w-full text-center bg-white text-red-900 hover:bg-red-100 font-bold py-2 px-4 rounded-md">Contact Us</Link>
                            <button aria-label="Language" className="flex items-center text-red-100 hover:text-white"><Globe size={20} className="mr-2" /> Language: EN</button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

// --- Main Page Component ---
// This component now includes the header, a hero section, and content.
export default function PortfolioNewsPage({ portfolio }) {
    console.log('Portfolio Data:', portfolio);
    return (
        <GuestLayout>
            {/* Hero Section with Background Image and Overlay Text */}
            <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: portfolio.cover_image
                            ? `url('/storage/${portfolio.cover_image}')`
                            : `url('/bg.jpg')`,
                    }}
                >
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl md:text-5xl mt-12 font-extrabold leading-tight mb-4 text-shadow-lg">
                        {portfolio.title || 'Portfolio Title'}
                    </h1>
                    <p className="text-lg md:text-xl font-light text-red-100 text-shadow-md">
                        Menghidupkan Ide Menjadi Nyata
                    </p>
                </div>
            </div>

            {/* content */}
            <main className="container mx-auto px-4 lg:px-6 py-12 md:py-20">
                {portfolio.thumbnail ? (
                    <div className="max-w-4xl mx-auto text-center mb-8">
                        <img
                            src={`/storage/${portfolio.thumbnail}`}
                            alt={portfolio.title}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                ) : (null) }
                <div
                    className="max-w-4xl mx-auto text-gray-700"
                    dangerouslySetInnerHTML={{
                        __html:
                            portfolio.content ||
                            '<p>Oops, there is an error. Please try again later</p>',
                    }}
                ></div>
            </main>


            {/* Basic animation and text-shadow styles */}
            <style>{`
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down { animation: fade-in-down 0.3s ease-out; }
                .text-shadow-lg { text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); }
                .text-shadow-md { text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7); }
            `}</style>
        </GuestLayout>
    );
}
