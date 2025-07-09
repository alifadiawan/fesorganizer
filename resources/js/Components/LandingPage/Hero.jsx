import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Note: The original code used Link from @inertiajs/react.
// If you're not using Inertia, you might want to replace this with a standard `<a>` tag.
import { Link } from '@inertiajs/react';

const Hero = () => {
    // Animation variants for the main container to orchestrate animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    // Enhanced animation variants for individual text and button elements
    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    // Floating particles animation
    const particleVariants = {
        animate: {
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.3, 0.8, 0.3],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="relative flex lg:flex-row flex-col overflow-hidden min-h-screen items-center">
            {/* Enhanced Background with Gradient Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: 'url("/bg.jpg")',
                }}
            >
                {/* Multi-layered overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-red-900/70 to-black/90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-purple-900/30"></div>
                
                {/* Animated mesh gradient overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-transparent to-red-800/20"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        background: [
                            'linear-gradient(45deg, rgba(128,0,32,0.2), transparent, rgba(139,0,0,0.2))',
                            'linear-gradient(45deg, rgba(139,0,0,0.3), transparent, rgba(128,0,32,0.3))',
                            'linear-gradient(45deg, rgba(128,0,32,0.2), transparent, rgba(139,0,0,0.2))'
                        ]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-red-300/30 rounded-full"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                    }}
                    variants={particleVariants}
                    animate="animate"
                    transition={{
                        delay: i * 0.5,
                        duration: 8 + i,
                        repeat: Infinity,
                    }}
                />
            ))}

            {/* Content container */}
            <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 lg:py-36 flex flex-col lg:flex-row items-center justify-between">
                {/* Left content area */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-white max-w-2xl lg:max-w-3xl mb-12 lg:mb-0"
                >
                    {/* Enhanced Typography with Better Gradients */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight lg:text-start text-center"
                    >
                        <motion.span 
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-200"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Innovative,
                        </motion.span>
                        <motion.span 
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-red-100 via-white to-red-200"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Experiences,
                        </motion.span>
                        <motion.span 
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-white to-red-100"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Memorable
                        </motion.span>
                        <motion.span 
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-300"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Events
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-red-100/90 mb-8 leading-relaxed max-w-2xl lg:text-start text-center"
                    >
                        Creating unforgettable moments with passion, precision, and unparalleled creativity.
                    </motion.p>

                    {/* Enhanced CTA section */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 flex lg:flex-row flex-col lg:gap-6 gap-4"
                    >
                        <motion.a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.youtube.com/watch?v=2fOrk2JUgxQ"
                            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-white to-red-50 text-purple-900 px-8 py-4 rounded-full font-semibold shadow-2xl overflow-hidden"
                            whileHover={{ 
                                scale: 1.05, 
                                y: -5,
                                boxShadow: "0px 15px 30px rgba(255, 255, 255, 0.3)" 
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-red-100 to-white opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.3 }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-red-700 relative z-10" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            <span className="relative z-10">Watch Video</span>
                        </motion.a>
                        
                        <motion.div
                            whileHover={{ 
                                scale: 1.05, 
                                y: -5,
                                boxShadow: "0px 15px 30px rgba(255, 255, 255, 0.2)" 
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link
                                href="#aboutus"
                                className="group relative w-full inline-flex items-center justify-center bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-burgundy-900 hover:border-white overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-white to-red-50 opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10">Learn More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right side image with enhanced floating animation */}
                <div className="lg:w-2/5 relative z-10 block">
                    <motion.div
                        animate={{ 
                            y: [0, -25, 0],
                            rotate: [0, 1, -1, 0],
                        }}
                        transition={{ 
                            duration: 6, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                    >
                        {/* Enhanced glow effect */}
                        <motion.div
                            initial={{ x: 200, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Glowing backdrop */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-400/30 to-red-300/20 rounded-full blur-3xl transform scale-110"></div>
                            
                            <motion.img
                                src="/festext.png"
                                alt="FES Logo"
                                className="max-w-full object-contain drop-shadow-2xl relative z-10"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 via-purple-900/20 to-transparent z-5"></div>
            
            {/* Improved ambient lighting effects */}
            <motion.div 
                className="absolute -bottom-20 right-0 w-80 h-80 bg-gradient-to-tl from-red-600/30 via-red-500/20 to-transparent rounded-full filter blur-3xl z-2"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            
            <motion.div 
                className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-red-400/30 via-red-300/20 to-transparent rounded-full filter blur-3xl z-2"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
            
            <motion.div 
                className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-red-200/20 via-red-100/10 to-transparent rounded-full filter blur-2xl z-2"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                }}
            />
        </section>
    );
};

export default Hero;