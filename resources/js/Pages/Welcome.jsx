import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Hero from "@/Components/LandingPage/Hero";
import AboutUs from "@/Components/LandingPage/AboutUs";

// Section wrapper for scroll animations
const AnimatedSection = ({ children, className }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.section
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
            className={className}
        >
            {children}
        </motion.section>
    );
};

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    jobListings,
}) {
    const [modalImage, setModalImage] = useState(null);

    const services = [
        {
            id: 1,
            icon: "users",
            title: "Gathering Award",
            description:
                "From intimate showcases to large-scale festivals, we create unforgettable music experiences with state-of-the-art sound and lighting.",
        },
        {
            id: 2,
            icon: "briefcase",
            title: "Seminar Talkshow",
            description:
                "Elevate your brand with professional conferences, product launches, and corporate gatherings designed to impress stakeholders.",
        },
        {
            id: 3,
            icon: "music",
            title: "Music Festival",
            description:
                "Turn your special day into a magical experience with our personalized wedding and celebration planning services.",
        },
        {
            id: 4,
            icon: "users",
            title: "Special Events",
            description:
                "Showcase your products and services with our comprehensive exhibition management solutions.",
        },
    ];

    const events = [
        {
            id: 1,
            date: "Feb 25, 2023",
            title: "Future Entrepreneur Summit Surabaya 2024",
            location: "Airlangga Convention Center, Surabaya",
            youtube: "https://www.youtube.com/watch?v=begb0t8qaa4",
            link: "https://www.instagram.com/p/DGF_Y7XvDAK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            id: 2,
            date: "Feb 24, 2023",
            title: "Future Entrepreneur Summit Malang 2024",
            location: "Dome Universitas Muhammadiyah Malang",
            youtube: "https://www.youtube.com/watch?v=3FibI1YoNVE&t=8s",
            link: "",
        },
        {
            id: 3,
            date: "Des 14, 2024",
            title: "Future Entrepreneur Summit Semarang 2024",
            location: "Auditorium Prof. Wuryanto UNNES",
            youtube: "https://www.youtube.com/watch?v=P-vcDLaMG9M",
            link: "",
        },
    ];

    const getYoutubeThumbnail = (url) => {
        if (!url) return null;
        const videoId = url.split("v=")[1]?.split("&")[0];
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    };

    const updatedEvents = events.map((event) => ({
        ...event,
        thumbnail: getYoutubeThumbnail(event.youtube),
    }));

    const [activeTab, setActiveTab] = useState("all");

    // Card animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <GuestLayout>
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <AboutUs />

            {/* Our Services */}
            <AnimatedSection
                id="ourservice"
                className="relative overflow-hidden bg-[#4f002f]"
            >
                <div
                    className="absolute inset-0 z-1 bg-black opacity-10"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M0 0h10v10H0z'/%3E%3C/g%3E%3C/svg%3E\")",
                        backgroundSize: "20px 20px",
                    }}
                ></div>

                <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 lg:py-36">
                    <div className="text-center mb-16">
                        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Our Services
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
                            We offer comprehensive event management solutions
                            tailored to your specific needs.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.id}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                                className="group relative overflow-hidden rounded-2xl bg-[#2a0033]/40 backdrop-blur-sm border border-[#4a0033] transition-all duration-300 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-2"
                            >
                                <div className="relative p-8 z-10 text-center">
                                    <div className="w-20 h-20 bg-[#4a0033] rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:bg-yellow-400 group-hover:scale-110">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-9 w-9 text-white transition-colors duration-300 group-hover:text-[#4a0033]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                        >
                                            {service.icon === "music" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                                />
                                            )}
                                            {service.icon === "briefcase" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            )}
                                            {service.icon === "heart" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            )}
                                            {service.icon === "users" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                                />
                                            )}
                                            {service.icon === "zap" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            )}
                                            {service.icon === "award" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            )}
                                        </svg>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-yellow-400">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="absolute -bottom-10 right-0 w-64 h-64 bg-[#4a0033] rounded-full filter blur-3xl opacity-10 z-2"></div>
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#4a0033] rounded-full filter blur-3xl opacity-10 z-2"></div>
            </AnimatedSection>

            {/* latest events */}
            <AnimatedSection
                id="latestevent"
                className="bg-gradient-to-b from-[#0B0B45] to-black text-white py-20 md:py-28"
            >
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold relative inline-block">
                            <span className="relative z-10">Portfolio</span>
                            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-[#ffcc00] rounded-full"></span>
                        </h2>
                        <p className="text-gray-400 mt-6 max-w-2xl text-center mx-auto text-lg">
                            Join us at our upcoming events and be part of the
                            experience.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                        {updatedEvents.map((event, i) => (
                            <motion.div
                                key={event.id}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                                className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ffcc00]/20 border border-gray-800 hover:border-[#ffcc00]/50"
                            >
                                <div className="aspect-[16/9] relative overflow-hidden">
                                    <img
                                        src={
                                            event.thumbnail ||
                                            "https://placehold.co/600x400/000000/FFFFFF?text=Event"
                                        }
                                        alt={event.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 left-4 bg-[#ffcc00] text-black font-bold py-1 px-3 rounded-full text-sm">
                                        {event.date}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#ffcc00] transition-colors duration-300 min-h-[56px]">
                                        {event.title}
                                    </h3>
                                    <div className="flex items-start mb-6 text-gray-400 text-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <span>{event.location}</span>
                                    </div>

                                    <div className="flex justify-center mt-auto">
                                        <a
                                            href={event.link || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center bg-transparent hover:bg-[#ffcc00] text-[#ffcc00] hover:text-black font-bold py-3 px-6 rounded-lg border-2 border-[#ffcc00] transition-all duration-300 transform group-hover:scale-105"
                                        >
                                            <span>Learn More</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection
                id="careers"
                className="py-16 md:py-24 bg-[#4f002f] relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#4a0033] rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#4a0033] rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#4a0033] rounded-full blur-[80px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[#ffcc00] text-4xl md:text-5xl font-bold mb-4">
                            Join Our Team
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
                            Become a part of FES+ and help us create
                            extraordinary events.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="space-y-6">
                            {jobListings.length > 0 ? (
                                jobListings.map((job, i) => (
                                    <motion.div
                                        key={job.id}
                                        custom={i}
                                        initial="hidden"
                                        animate="visible"
                                        variants={cardVariants}
                                        className="block bg-[#1a0033]/60 backdrop-blur-md border border-[#4a0033] rounded-xl overflow-hidden hover:border-[#ffcc00] transition-all duration-300 group"
                                        aria-label={`View details for ${job.title}`}
                                    >
                                        <div className="flex flex-col md:flex-row">
                                            <div className="w-full md:w-48 flex-shrink-0 h-48 md:h-auto overflow-hidden">
                                                <img
                                                    src={`/job_images/${job.image}`}
                                                    alt={`Image for ${job.title}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                                                    onClick={() =>
                                                        setModalImage(
                                                            `/job_images/${job.image}`
                                                        )
                                                    }
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src =
                                                            "https://placehold.co/400x400/1a0033/ffcc00?text=FES+";
                                                    }}
                                                />
                                            </div>

                                            <div className="p-6 flex-grow flex flex-col">
                                                <div className="flex-grow">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#ffcc00] transition-colors duration-300">
                                                            {job.title}
                                                        </h3>
                                                        <span className="text-xs text-gray-500 flex-shrink-0 ml-4 mt-1">
                                                            {job.postedDate}
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
                                                        <span className="font-medium text-[#ffcc00]">
                                                            {job.department}
                                                        </span>
                                                        <span className="text-gray-500">
                                                            &bull;
                                                        </span>
                                                        <span>
                                                            {job.location}
                                                        </span>
                                                        <span className="text-gray-500">
                                                            &bull;
                                                        </span>
                                                        <span>{job.type}</span>
                                                    </div>
                                                    <div
                                                        className="text-sm text-gray-300 mt-4 line-clamp-3"
                                                        dangerouslySetInnerHTML={{
                                                            __html: job.description,
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="mt-4 text-right">
                                                    <a
                                                        href={route(
                                                            "public.careers.index"
                                                        )}
                                                        className="inline-flex items-center justify-center px-6 py-2 bg-transparent border-2 border-[#ffcc00] text-[#ffcc00] rounded-full group-hover:bg-[#ffcc00] group-hover:text-black transition-all duration-300 text-sm font-medium transform group-hover:scale-105"
                                                    >
                                                        Apply Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-16 bg-[#1a0033]/40 backdrop-blur-sm border border-[#4a0033] rounded-xl">
                                    <div className="w-16 h-16 bg-[#2a0033] rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        No Positions Available
                                    </h3>
                                    <p className="text-gray-400 max-w-md mx-auto">
                                        There are currently no open positions.
                                        Please check back later.
                                    </p>
                                </div>
                            )}

                            {modalImage && (
                                <div
                                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                                    onClick={() => setModalImage(null)}
                                >
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        className="relative max-w-4xl w-full p-4"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <img
                                            src={modalImage}
                                            alt="Enlarged job image"
                                            className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
                                        />
                                        <button
                                            onClick={() => setModalImage(null)}
                                            className="absolute -top-2 -right-2 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-white hover:text-black transition-colors"
                                        >
                                            &times;
                                        </button>
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection
                id="contact"
                className="bg-gradient-to-b from-[#4f002f] to-black text-white py-20 md:py-28"
            >
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Create Your Next Event?
                    </h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto text-white/80">
                        Let us help you create innovative, memorable experiences
                        for your audience.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="mailto:admin@sancakragroup.com"
                            className="inline-block bg-white text-[#4a0033] px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-2xl"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </AnimatedSection>
        </GuestLayout>
    );
}
