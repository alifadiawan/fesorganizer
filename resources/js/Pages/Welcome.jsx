import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {

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
    const jobListings = []
    const departments = ["all", ...new Set(jobListings.map((job) => job.department.toLowerCase()))]

    const filteredJobs =
        activeTab === "all" ? jobListings : jobListings.filter((job) => job.department.toLowerCase() === activeTab)

    return (
        <GuestLayout>
            {/* Hero Section */}
            <section className="relative flex lg:flex-row flex-col overflow-hidden lg:pt-0 pt-12">
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
                    <div className="text-white max-w-2xl lg:max-w-3xl mb-12 lg:mb-0 ">

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
                    </div>

                    {/* Right side image with floating animation and enhanced visibility */}
                    <div className="lg:w-2/5 relative z-10 block">
                        <div className="relative animate-float">
                            <div className="absolute -inset-2 bg-purple-400 bg-opacity-30 rounded-3xl blur-xl"></div>
                            <div className="relative">
                                <img
                                    src="/festext.png"
                                    alt="FES Logo"
                                    className="max-w-full object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent z-5"></div>
                <div className="absolute -bottom-10 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-20 z-2"></div>
                <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-300 rounded-full filter blur-3xl opacity-20 z-2"></div>
            </section>


            {/* About Section */}
            <section id="aboutus" className="py-20 md:py-32 relative overflow-hidden">
                {/* Improved background with subtle pattern */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-[#1a1a4a] to-[#0a0a2a] opacity-95"></div>

                {/* Subtle geometric pattern overlay */}
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")',
                        backgroundSize: '50px 50px'
                    }}></div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    {/* Improved section header with accent line */}
                    <div className="text-center mb-16">
                        <div className="inline-block">
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">ABOUT OUR COMPANY</h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mx-auto mt-2"></div>
                        </div>
                    </div>

                    {/* Redesigned content layout with proper spacing and structure */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left column with stacked images and visual interest */}
                        <div className="lg:col-span-7 relative">
                            <div className="grid grid-cols-12 gap-4">
                                {/* Main logo with subtle glow effect */}
                                <div className="col-span-12 md:col-span-6 relative transform -rotate-2 transition-transform duration-500 hover:rotate-0">
                                    <div className="absolute -inset-1 rounded-lg"></div>
                                    <div className=" p-6 rounded-lg relative">
                                        <img
                                            src="/festext.png"
                                            alt="FES Logo"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Secondary company image with contrasting rotation */}
                                <div className="col-span-12 md:col-span-7 md:col-start-5 mt-8 md:-mt-6 relative z-10 transform rotate-3 transition-transform duration-500 hover:rotate-0">
                                    <div className="absolute -inset-1 rounded-lg"></div>
                                    <div className="p-6 rounded-lg relative">
                                        <img
                                            src="/about-1.png"
                                            alt="About FES"
                                            className="w-full h-auto object-cover rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-400 rounded-full filter blur-3xl opacity-20 z-0"></div>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-300 rounded-full filter blur-3xl opacity-20 z-0"></div>
                        </div>

                        {/* Right column with improved typography and content structure */}
                        <div className="lg:col-span-5">
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl">
                                <h3 className="text-2xl font-semibold mb-6 text-purple-200">Our Story Since 2020</h3>

                                <div className="space-y-4 text-gray-200 leading-relaxed">
                                    <p>
                                        FES by Sancakra Group menyediakan layanan event organizer dan agency (EO) terbaik di Indonesia sesuai kebutuhan Anda. Sebagai perusahaan yang legal dan profesional dalam menyelenggarakan berbagai acara indoor dan outdoor sejak tahun 2020.
                                    </p>

                                    <p>
                                        Berbagai acara seperti launching, gathering, conference, seminar, townhall, exhibition (pameran) dan roadshow dirancang khusus dan menarik. Seluruh tim FES (EO) siap memberikan konsep kegiatan sesuai kebutuhan klien dan membuka dialog/diskusi untuk bertukar ide dan konsep kegiatan yang akan diselenggarakan nantinya.
                                    </p>

                                    <div className="mt-8 border-l-4 border-purple-400 pl-4 italic">
                                        Lebih dari <span className="text-2xl font-bold text-white">1200+</span> perusahaan dan organisasi telah mempercayakan kepada kami gathering event, launching, offline, online, hybrid event.
                                    </div>

                                    <p className="mt-4">
                                        Sesuai dengan visi kami sebagai layanan solusi EO Indonesia yang handal dan terpadu.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                            <div className="text-3xl font-bold text-purple-300 mb-2">20+</div>
                            <div className="text-gray-300">Partnership</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                            <div className="text-3xl font-bold text-purple-300 mb-2">25.000 +</div>
                            <div className="text-gray-300">Event Audiens</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                            <div className="text-3xl font-bold text-purple-300 mb-2">50+</div>
                            <div className="text-gray-300">Project Events</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                            <div className="text-3xl font-bold text-purple-300 mb-2">100+</div>
                            <div className="text-gray-300">Team Member</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ourservice" className="py-16 md:py-24 bg-gradient-to-br from-indigo-700 via-purple-800 to-violet-900 brightness-75">
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
            </section>

            {/* Events Section */}
            <section id="latestevent" className="bg-black text-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Events</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {updatedEvents.map((event) => (
                            <div key={event.id} className="group relative overflow-hidden rounded-lg">
                                <div className="aspect-[5/6] relative">
                                    <img
                                        src={event.thumbnail}
                                        alt={event.title}
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="text-[#ffcc00] font-bold mb-2">{event.date}</div>
                                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                    <p className="text-gray-300 mb-4">{event.location}</p>
                                    <a href={event.link} target="_blank" className="inline-flex items-center text-white hover:text-[#ffcc00]">
                                        Learn More
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 ml-2"
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
                        <div className="flex flex-wrap gap-2 mb-8 justify-center">
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
                        </div>

                        {/* Job listings */}
                        <div className="space-y-6">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job) => (
                                    <div
                                        key={job.id}
                                        className="bg-[#1a0033] bg-opacity-40 backdrop-blur-sm border border-[#4a0033] rounded-xl overflow-hidden hover:border-[#ffcc00] transition-all duration-300"
                                    >
                                        <div className="p-6 md:p-8">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{job.title}</h3>
                                                    <div className="flex flex-wrap gap-2 text-sm">
                                                        <span className="text-[#ffcc00]">{job.department}</span>
                                                        <span className="text-gray-400">•</span>
                                                        <span className="text-gray-400">{job.location}</span>
                                                        <span className="text-gray-400">•</span>
                                                        <span className="text-gray-400">{job.type}</span>
                                                    </div>
                                                </div>
                                                <div className="mt-4 md:mt-0 text-sm text-gray-400">Posted: {job.postedDate}</div>
                                            </div>

                                            <p className="text-gray-300 mb-6">{job.description}</p>

                                            <div className="flex flex-wrap gap-3">
                                                <Link
                                                    href={`/careers/${job.id}`}
                                                    className="inline-flex items-center justify-center px-6 py-2 bg-[#4a0033] text-white rounded-full hover:bg-[#ffcc00] hover:text-black transition-colors duration-300 text-sm font-medium"
                                                >
                                                    View Details
                                                </Link>
                                                <Link
                                                    href={`/careers/${job.id}/apply`}
                                                    className="inline-flex items-center justify-center px-6 py-2 bg-transparent border border-[#ffcc00] text-[#ffcc00] rounded-full hover:bg-[#ffcc00] hover:text-black transition-colors duration-300 text-sm font-medium"
                                                >
                                                    Apply Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
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
                                        There are currently no open positions in this department. Please check back later or explore other
                                        departments.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="bg-gradient-to-br from-indigo-700 via-purple-800 to-violet-900 brightness-75 text-white py-16">
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
