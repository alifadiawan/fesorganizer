import { motion } from "motion/react"
import GuestLayout from '@/Layouts/GuestLayout';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import Hero from "@/Components/LandingPage/Hero";
import AboutUs from "@/Components/LandingPage/AboutUs";


export default function Welcome({ auth, laravelVersion, phpVersion, jobListings }) {
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
            description: "Showcase your products and services with our comprehensive exhibition management solutions.",
        },
    ]

    const events = [
        {
            id: 1,
            date: "Feb 25, 2023",
            title: "Future Entrepreneur Summit Surabaya 2024",
            location: "Airlangga Convention Center, Surabaya",
            youtube: "https://www.youtube.com/watch?v=begb0t8qaa4",
            link: "https://www.instagram.com/p/DGF_Y7XvDAK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        },
        {
            id: 2,
            date: "Feb 24, 2023",
            title: "Future Entrepreneur Summit Malang 2024",
            location: "Dome Universitas Muhammadiyah Malang",
            youtube: "https://www.youtube.com/watch?v=3FibI1YoNVE&t=8s",
            link: ""
        },
        {
            id: 3,
            date: "Des 14, 2024",
            title: "Future Entrepreneur Summit Semarang 2024",
            location: "Auditorium Prof. Wuryanto UNNES",
            youtube: "https://www.youtube.com/watch?v=P-vcDLaMG9M",
            link: ""
        },
    ];


    const getYoutubeThumbnail = (url) => {
        const videoId = url.split("v=")[1]?.split("&")[0]; // Ambil ID video dari URL
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; // Link thumbnail
    };

    const updatedEvents = events.map(event => ({
        ...event,
        thumbnail: getYoutubeThumbnail(event.youtube)
    }));


    const [activeTab, setActiveTab] = useState("all")


    return (
        <GuestLayout>

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <AboutUs />

            {/* Our Services */}
            <section id="ourservice" className="relative flex lg:flex-row flex-col overflow-hidden lg:pt-0 pt-12">
                {/* Enhanced gradient background with more depth */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-700 via-purple-800 to-violet-900 brightness-75"></div>

                {/* Subtle pattern overlay for texture */}
                <div className="absolute inset-0 z-1 bg-black opacity-10" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M0 0h10v10H0z\'/%3E%3C/g%3E%3C/svg%3E")',
                    backgroundSize: '20px 20px'
                }}></div>

                {/* Content container with improved spacing */}
                <div className="relative z-10 container mx-auto px-6 py-20 md:py-28 lg:py-36 flex flex-col items-center justify-between">
                    <div className="text-center mb-16">
                        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
                        <p className="text-white text-lg md:text-lg max-w-3xl mx-auto">
                            We offer comprehensive event management solutions tailored to your specific needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="group relative overflow-hidden rounded-xl bg-[#2a0033] bg-opacity-40 backdrop-blur-sm border border-[#4a0033] hover:border-yellow-400 transition-all duration-300"
                            >

                                <div className="relative p-8 z-10">
                                    <div className="w-16 h-16 bg-[#4a0033] rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-white group-hover:text-[#4a0033]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            {service.icon === "music" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                                />
                                            )}
                                            {service.icon === "briefcase" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            )}
                                            {service.icon === "heart" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            )}
                                            {service.icon === "users" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                                />
                                            )}
                                            {service.icon === "zap" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            )}
                                            {service.icon === "award" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            )}
                                        </svg>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 mb-6">{service.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent z-5"></div>
                <div className="absolute -bottom-10 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20 z-2"></div>
                <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-300 rounded-full filter blur-3xl opacity-20 z-2"></div>
            </section>
            {/* <section id="ourservice" className="py-16 md:py-24 bg-gradient-to-br from-indigo-700 via-purple-800 to-violet-900 brightness-75">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
                            We offer comprehensive event management solutions tailored to your specific needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="group relative overflow-hidden rounded-xl bg-[#2a0033] bg-opacity-40 backdrop-blur-sm border border-[#4a0033] hover:border-purple-400 transition-all duration-300"
                            >

                                <div className="relative p-8 z-10">
                                    <div className="w-16 h-16 bg-[#4a0033] rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-400 transition-colors duration-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 text-white group-hover:text-[#4a0033]"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            {service.icon === "music" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                                />
                                            )}
                                            {service.icon === "briefcase" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            )}
                                            {service.icon === "heart" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            )}
                                            {service.icon === "users" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                                />
                                            )}
                                            {service.icon === "zap" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            )}
                                            {service.icon === "award" && (
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            )}
                                        </svg>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 mb-6">{service.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* latest events */}
            <section id="latestevent" className="bg-black text-white py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold relative">
                            <span className="relative z-10">Latest Events</span>
                            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-[#ffcc00] rounded-full transform -translate-x-1"></span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl text-center">
                            Join us at our upcoming events and be part of the experience
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                        {updatedEvents.map((event) => (
                            <div
                                key={event.id}
                                className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-800"
                            >
                                <div className="aspect-[16/9] relative overflow-hidden">
                                    <img
                                        src={event.thumbnail || "/placeholder.svg"}
                                        alt={event.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 left-4 bg-[#ffcc00] text-black font-bold py-1 px-3 rounded-full text-sm">
                                        {event.date}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#ffcc00] transition-colors duration-300">
                                        {event.title}
                                    </h3>
                                    <div className="flex items-center mb-4 text-gray-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <span>{event.location}</span>
                                    </div>

                                    <a
                                        href={event.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-full bg-transparent hover:bg-[#ffcc00] text-[#ffcc00] hover:text-black font-bold py-3 px-4 rounded-lg border border-[#ffcc00] transition-all duration-300"
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
                        ))}
                    </div>
                </div>
            </section>

            <section id="careers" className="py-16 md:py-24 bg-gradient-to-b from-[#0a0a2a] to-black relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#ff00ff] rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#4a0033] rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#ffcc00] rounded-full blur-[80px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-[#ffcc00] text-4xl md:text-5xl font-bold mb-4">Our Careers</h2>
                        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
                            Join for Team FES+
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        {/* Team image */}
                        {/* <div className="relative h-64 md:h-80 mb-12 rounded-xl overflow-hidden">
                            <img src="/team-image.jpg" alt="FES Management Team" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Work With The Best</h3>
                                <p className="text-gray-300 max-w-xl">
                                    Join a team of passionate professionals dedicated to creating extraordinary events
                                </p>
                            </div>
                        </div> */}

                        {/* Department tabs */}
                        {/* <div className="flex flex-wrap gap-2 mb-8 justify-center">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setActiveTab(dept)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === dept ? "bg-[#ffcc00] text-black" : "bg-[#2a0033] text-white hover:bg-[#4a0033]"
                                        }`}
                                >
                                    {dept.charAt(0).toUpperCase() + dept.slice(1)}
                                </button>
                            ))}
                        </div> */}

                        {/* Job listings */}
                        <div className="space-y-6">
                            {jobListings.length > 0 ? (
                                <div className="space-y-6">
                                    {jobListings.map((job) => (
                                        <div // Each job card is a clickable link
                                            key={job.id}
                                            className="block bg-[#1a0033] bg-opacity-60 backdrop-blur-md border border-[#4a0033] rounded-xl overflow-hidden hover:border-[#ffcc00] transition-all duration-300 group"
                                            aria-label={`View details for ${job.title}`}
                                        >
                                            <div className="flex flex-col md:flex-row">
                                                {/* Image Column - Responsive */}
                                                <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                                                    <img
                                                        src={`/job_images/${job.image}`}
                                                        alt={`Image for ${job.title}`}
                                                        className="w-full h-full md:h-full object-cover transition-transform duration-300 cursor-pointer"
                                                        onClick={() => setModalImage(`/job_images/${job.image}`)}
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = '/festext.png';
                                                        }}
                                                    />
                                                </div>

                                                {/* Content Column */}
                                                <div className="p-5 md:p-6 flex-grow flex flex-col"> {/* Added flex flex-col here */}
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                                                        <div>
                                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#ffcc00] transition-colors duration-300">
                                                                {job.title}
                                                            </h3>
                                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
                                                                <span className="text-[#ffcc00] font-medium">{job.department}</span>
                                                                <span className="text-gray-500 dark:text-gray-400">•</span>
                                                                <span className="text-gray-400 dark:text-gray-300">{job.location}</span>
                                                                <span className="text-gray-500 dark:text-gray-400 hidden sm:inline">•</span>
                                                                <span className="text-gray-400 dark:text-gray-300 mt-1 sm:mt-0">{job.type}</span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-2 sm:mt-0 text-xs sm:text-sm text-gray-500 dark:text-gray-400 self-start sm:self-center">
                                                            Posted: {job.postedDate}
                                                        </div>
                                                    </div>

                                                    <p className="text-gray-300 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 md:line-clamp-2 group-hover:line-clamp-none transition-all duration-200 flex-grow whitespace-pre-line">
                                                        {job.description}
                                                    </p>


                                                    <div className="flex flex-wrap gap-2 mt-auto"> 
                                                        {/* <span
                                                            className="inline-flex items-center justify-center px-4 py-1.5 bg-[#4a0033] text-white rounded-full group-hover:bg-[#ffcc00] group-hover:text-black transition-colors duration-300 text-xs font-medium"
                                                        >
                                                            View Details
                                                        </span> */}
                                                        <a href={route('public.careers.index')}
                                                            className="inline-flex items-center justify-center px-4 py-1.5 bg-transparent border border-[#ffcc00] text-[#ffcc00] rounded-full group-hover:bg-[#ffcc00] group-hover:text-black transition-colors duration-300 text-xs font-medium"
                                                        >
                                                            Apply Now
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-[#1a0033] bg-opacity-40 backdrop-blur-sm border border-[#4a0033] rounded-xl">
                                    <div className="w-16 h-16 bg-[#2a0033] rounded-full flex items-center justify-center mx-auto mb-4">
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
                                    <h3 className="text-xl font-bold text-white mb-2">No Positions Available</h3>
                                    <p className="text-gray-400 max-w-md mx-auto">
                                        There are currently no open positions. Please check back later.
                                    </p>
                                </div>
                            )}

                            {modalImage && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                                    <div className="relative max-w-3xl w-full p-4">
                                        <img
                                            src={modalImage}
                                            alt="Enlarged"
                                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                        />
                                        <button
                                            onClick={() => setModalImage(null)}
                                            className="absolute top-2 right-2 text-white text-2xl font-bold"
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-gradient-to-br from-indigo-700 via-purple-800 to-violet-900 brightness-100 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Next Event?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let us help you create innovative, memorable experiences for your audience
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:admin@sancakragroup.com"
                            className="bg-white text-[#4a0033] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

        </GuestLayout >

    );
}
