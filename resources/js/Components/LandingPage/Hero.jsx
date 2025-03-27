import React from 'react'
import { motion } from "motion/react"
import { Link } from '@inertiajs/react'

const Hero = () => {
    return (
        <section data-aos="fade-right" className="relative flex lg:flex-row flex-col overflow-hidden lg:pt-0 pt-12">
            {/* Enhanced gradient background with more depth */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-700 via-purple-800 to-violet-900 brightness-75"></div>

            {/* Subtle pattern overlay for texture */}
            <div className="absolute inset-0 z-1 bg-black opacity-10" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M0 0h10v10H0z\'/%3E%3C/g%3E%3C/svg%3E")',
                backgroundSize: '20px 20px'
            }}></div>

            {/* Content container with improved spacing */}
            <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 lg:py-36 flex flex-col lg:flex-row items-center justify-between">
                {/* Left content area with improved typography */}
                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.8,
                            ease: "easeOut"
                        }
                    }}
                    viewport={{
                        once: true
                    }}
                    className="text-white max-w-2xl lg:max-w-3xl mb-12 lg:mb-0 ">

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight lg:text-start text-center">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Innovative,</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Experiences,</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Memorable</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Events</span>
                    </h1>

                    {/* Improved CTA section with animated hover effects */}
                    <div className="mt-12 flex lg:flex-row flex-col lg:gap-6 gap-3">
                        <a
                            target="_blank"
                            href="https://www.youtube.com/watch?v=2fOrk2JUgxQ"
                            className="group inline-flex items-center bg-white text-purple-900 px-7 py-4 rounded-full font-medium transition-all duration-300 hover:bg-purple-50 hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3 text-purple-700 group-hover:animate-pulse"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Watch Video
                        </a>
                        <Link
                            href="#aboutus"
                            className="group inline-flex items-center bg-transparent border-2 border-white text-white px-7 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-purple-900 hover:shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
                        >
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>

                {/* Right side image with floating animation and enhanced visibility */}
                <div className="lg:w-2/5 relative z-10 block">
                    <div className="relative animate-float">
                        <div className="absolute-inset-2 bg-purple-400 bg-opacity-30 rounded-3xl blur-xl"></div>
                        <motion.div
                            initial={{
                                x: 200,
                                opacity: 0
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{
                                once: true
                            }}
                            className="relative">
                            <img
                                src="/festext.png"
                                alt="FES Logo"
                                className="max-w-full object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent z-5"></div>
            <div className="absolute -bottom-10 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20 z-2"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-300 rounded-full filter blur-3xl opacity-20 z-2"></div>
        </section>
    )
}

export default Hero