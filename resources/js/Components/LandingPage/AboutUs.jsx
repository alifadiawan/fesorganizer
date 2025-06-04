import React from 'react'
import { motion } from "motion/react"

const AboutUs = () => {
    return (
        <section className="py-16 md:py-32 relative overflow-hidden" id="aboutus">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-[#1a1a4a] to-[#0a0a2a] opacity-95"></div>

            {/* Subtle Pattern Background */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: "50px 50px",
                }}
            ></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-block">
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">ABOUT OUR COMPANY</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full mx-auto mt-2">
                        </div>
                    </div>
                </motion.div>

                {/* Content Section with Improved Responsive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Images */}
                    <motion.div className="lg:col-span-7 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full md:w-3/4 mx-auto"
                        >
                            <motion.img
                                src="/festext.png"
                                alt="FES Logo"
                                className="w-full h-64 object-cover rounded-lg"
                                whileHover={{ scale: 1.05 }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="w-full md:w-4/5 mx-auto"
                        >
                            <motion.img
                                src="/about-1.png"
                                alt="About FES"
                                className="w-full h-64 object-cover rounded-lg"
                                whileHover={{ scale: 1.05 }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-purple-900/20">
                            <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-200 border-b border-purple-700 pb-3">
                                Our Story Since 2020
                            </h3>
                            <div className="space-y-4 mt-4">
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                    FES by Sancakra Group menyediakan layanan event organizer dan agency (EO) terbaik di Indonesia sesuai kebutuhan Anda. Sebagai perusahaan yang legal dan profesional dalam menyelenggarakan berbagai acara sejak tahun 2020.
                                </p>
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                    Berbagai acara seperti launching, gathering, conference, seminar, dan roadshow dirancang dengan konsep yang menarik. Tim FES siap memberikan solusi terbaik untuk klien.
                                </p>
                            </div>
                            <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border-l-4 border-purple-400">
                                <div className="text-white text-sm md:text-base">
                                    Lebih dari <span className="text-2xl font-bold text-yellow-300 ml-1">1200+</span> perusahaan dan organisasi telah mempercayakan kepada kami gathering event, launching, offline, online, hybrid event.
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                    className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center"
                >
                    {[
                        { number: "20+", text: "Partnership" },
                        { number: "25,000+", text: "Event Audiens" },
                        { number: "50+", text: "Project Events" },
                        { number: "100+", text: "Team Member" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-purple-900/20 hover:border-purple-500/50 transition-all"
                        >
                            <div className="text-2xl md:text-3xl font-bold text-purple-300 mb-2">{item.number}</div>
                            <div className="text-sm md:text-base text-gray-300">{item.text}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default AboutUs