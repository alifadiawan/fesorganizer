import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Search, Globe, Menu, X, ArrowRight } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';



export default function PortfolioIndex({ portfolioItems }) {
    console.log(portfolioItems);
    return (
        <GuestLayout>
            <main className="container mx-auto mt-24 px-4 lg:px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-red-900 tracking-tight sm:text-5xl">Our Work</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Check out some of our recent projects and success stories.
                    </p>
                </div>

                {/* Responsive Grid for Portfolio Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.data.map((item) => (
                        <Link href={route('public.portfolio.show', item.slug)} key={item.id} className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="relative">
                                <img
                                    src={`/storage/${item.thumbnail}` || 'https://placehold.co/600x400/4f002f/ffffff?text=FESt'}
                                    alt={item.title}
                                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/ef4444/ffffff?text=Image+Failed'; }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                            </div>
                            <div className="p-6 bg-white">
                                <p className="text-sm font-semibold text-red-700 uppercase tracking-wider">{item.category}</p>
                                <h3 className="mt-2 text-xl font-bold text-gray-900">{item.title}</h3>
                                <div className="mt-4 flex items-center text-red-800 font-semibold">
                                    <span>View Project</span>
                                    <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <style>{`
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down { animation: fade-in-down 0.3s ease-out; }
            `}</style>
        </GuestLayout>
    );
}
