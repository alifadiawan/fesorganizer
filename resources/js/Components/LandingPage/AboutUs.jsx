import React from 'react'
import { motion } from "framer-motion"

const AboutUs = () => {
    return (
        <section className="py-16 md:py-32 relative overflow-hidden" id="aboutus">
            {/* Enhanced Background Gradient with Burgundy Theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-red-900 to-black opacity-95"></div>

            {/* Animated Background Mesh */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-transparent to-red-800/20"
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    background: [
                        'linear-gradient(45deg, rgba(128,0,32,0.1), transparent, rgba(139,0,0,0.1))',
                        'linear-gradient(45deg, rgba(139,0,0,0.2), transparent, rgba(128,0,32,0.2))',
                        'linear-gradient(45deg, rgba(128,0,32,0.1), transparent, rgba(139,0,0,0.1))'
                    ]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Enhanced Pattern Background */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: "50px 50px",
                }}
            ></div>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-red-300/20 rounded-full"
                    style={{
                        left: `${10 + i * 12}%`,
                        top: `${20 + i * 8}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.7,
                    }}
                />
            ))}

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                {/* Enhanced Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-block">
                        <motion.h2 
                            className="text-2xl md:text-3xl font-bold text-white tracking-wide"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            ABOUT OUR COMPANY
                        </motion.h2>
                        <motion.div 
                            className="h-1 w-24 bg-gradient-to-r from-red-300 to-red-500 rounded-full mx-auto mt-2"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                    </div>
                </motion.div>

                {/* Enhanced Content Section with Image Gallery */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Enhanced Image Gallery */}
                    <motion.div className="xl:col-span-7 space-y-6">
                        {/* Main featured image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/20 rounded-2xl blur-xl transform scale-105 group-hover:scale-110 transition-transform duration-300"></div>
                            <motion.img
                                src="foto-1.jpeg"
                                alt="FES Event Highlight"
                                className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </motion.div>

                        {/* Image grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-400/15 to-red-500/15 rounded-xl blur-lg transform scale-105 group-hover:scale-110 transition-transform duration-300"></div>
                                <motion.img
                                    src="about-1.png"
                                    alt="Event Management"
                                    className="relative w-full h-48 object-cover rounded-xl shadow-xl"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-400/15 to-red-500/15 rounded-xl blur-lg transform scale-105 group-hover:scale-110 transition-transform duration-300"></div>
                                <motion.img
                                    src="foto-2.jpeg"
                                    alt="Team Collaboration"
                                    className="relative w-full h-48 object-cover rounded-xl shadow-xl"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </motion.div>
                        </div>

                        
                    </motion.div>

                    {/* Right Column - Enhanced Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="xl:col-span-5"
                    >
                        <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-red-800/20 hover:border-red-600/40 transition-all duration-300">
                            <motion.h3 
                                className="text-xl md:text-2xl font-bold mb-4 text-red-200 border-b border-red-700 pb-3"
                                whileHover={{ color: "#fecaca" }}
                                transition={{ duration: 0.3 }}
                            >
                                Our Story Since 2020
                            </motion.h3>
                            <div className="space-y-4 mt-4">
                                <motion.p 
                                    className="text-sm md:text-base text-gray-300 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    FES by Sancakra Group menyediakan layanan event organizer dan agency (EO) terbaik di Indonesia sesuai kebutuhan Anda. Sebagai perusahaan yang legal dan profesional dalam menyelenggarakan berbagai acara sejak tahun 2020.
                                </motion.p>
                                <motion.p 
                                    className="text-sm md:text-base text-gray-300 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    Berbagai acara seperti launching, gathering, conference, seminar, dan roadshow dirancang dengan konsep yang menarik. Tim FES siap memberikan solusi terbaik untuk klien.
                                </motion.p>
                                <motion.p 
                                    className="text-sm md:text-base text-gray-300 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    Dengan pengalaman lebih dari 4 tahun, kami telah mengembangkan keahlian dalam menciptakan pengalaman yang tak terlupakan dengan pendekatan yang inovatif dan professional.
                                </motion.p>
                            </div>
                            <motion.div 
                                className="mt-6 p-4 bg-red-900/20 rounded-lg border-l-4 border-red-400"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="text-white text-sm md:text-base">
                                    Lebih dari <motion.span 
                                        className="text-2xl font-bold text-red-300 ml-1"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        1200+
                                    </motion.span> perusahaan dan organisasi telah mempercayakan kepada kami gathering event, launching, offline, online, hybrid event.
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Enhanced Trust Indicators */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                        },
                    }}
                    className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                >
                    {[
                        { number: "20+", text: "Partnership", icon: "🤝" },
                        { number: "25,000+", text: "Event Audiens", icon: "👥" },
                        { number: "50+", text: "Project Events", icon: "🎯" },
                        { number: "100+", text: "Team Member", icon: "⭐" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.8 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -5,
                                boxShadow: "0px 15px 30px rgba(220, 38, 38, 0.2)" 
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-red-800/20 hover:border-red-600/50 transition-all duration-300 text-center group"
                        >
                            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <motion.div 
                                className="text-2xl md:text-3xl font-bold text-red-300 mb-2"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                            >
                                {item.number}
                            </motion.div>
                            <div className="text-sm md:text-base text-gray-300">{item.text}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="mt-16 md:mt-24"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Professional Excellence",
                                description: "Tim ahli dengan pengalaman bertahun-tahun dalam industri event management",
                                icon: "🏆"
                            },
                            {
                                title: "Innovative Solutions",
                                description: "Solusi kreatif dan teknologi terdepan untuk setiap kebutuhan event Anda",
                                icon: "💡"
                            },
                            {
                                title: "Client Satisfaction",
                                description: "Komitmen penuh untuk memberikan hasil yang melampaui ekspektasi klien",
                                icon: "❤️"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm p-6 rounded-xl border border-red-800/20 hover:border-red-600/40 transition-all duration-300"
                            >
                                <div className="text-3xl mb-4">{feature.icon}</div>
                                <h4 className="text-lg font-semibold text-red-200 mb-3">{feature.title}</h4>
                                <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Enhanced ambient lighting effects */}
            <motion.div 
                className="absolute -bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-red-600/20 via-red-500/10 to-transparent rounded-full filter blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            
            <motion.div 
                className="absolute top-20 right-10 w-60 h-60 bg-gradient-to-bl from-red-400/20 via-red-300/10 to-transparent rounded-full filter blur-3xl"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                }}
            />
        </section>
    )
}

export default AboutUs