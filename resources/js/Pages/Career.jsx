import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "@/Components/Footer";
import { Link } from "@inertiajs/react";

// --- SVG Icons (replacing lucide-react) ---
const Briefcase = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect x="2" y="6" width="20" height="14" rx="2" />
    </svg>
);
const MapPin = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);
const Clock = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);
const DollarSign = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
);
const Filter = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
);
const X = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <line x1="18" x2="6" y1="6" y2="18" />
        <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
);
const Users = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const GuestLayout = ({ children }) => <div>{children}</div>;

const JobDetailModal = ({ job, onClose }) => {
    if (!job) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative bg-[#1a0033] max-w-2xl w-full p-8 rounded-2xl border border-purple-500/50 shadow-2xl max-h-screen overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <X />
                </button>
                <h2 className="text-2xl font-bold text-white mb-2">
                    {job.title}
                </h2>
                <p className="text-purple-300 mb-4">{job.company}</p>
                <div className="space-y-3 text-gray-300 mb-6">
                    <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-purple-300" />
                        <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-purple-300" />
                        <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-purple-300" />
                        <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4 text-purple-300" />
                        <span>{job.status}</span>
                    </div>
                </div>
                <div
                    className="text-gray-400 mb-6"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                ></div>
                <a href={'#' && job.external_link} className="w-full bg-gradient-to-r from-red-700 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-purple-500 transition-all transform hover:scale-105">
                    Daftar Sekarang
                </a>
            </motion.div>
        </div>
    );
};

const Career = ({ featuredJobs }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedJob, setSelectedJob] = useState(null);
    const [isFilterVisible, setIsFilterVisible] = useState(true);

    const categories = [
        { id: "all", name: "Semua Posisi", icon: Briefcase },
        // { id: "production", name: "Produksi & Teknologi", icon: Briefcase },
        // { id: "creative", name: "Kreatif & Desain", icon: Briefcase },
        // { id: "marketing", name: "Pemasaran & Humas", icon: Briefcase },
        // { id: "logistics", name: "Logistik & Operasional", icon: Briefcase },
        // { id: "artist_relations", name: "Hubungan Artis", icon: Users },
        // { id: "guest_services", name: "Layanan Tamu", icon: Users },
    ];

    const filteredJobs = featuredJobs.filter(
        (job) =>
            (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
            job.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
            (selectedCategory === "all" || job.category === selectedCategory)
    );

    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    const handleCloseModal = () => {
        setSelectedJob(null);
    };

    const CategoryFilter = () => (
        <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 sticky top-24">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-white text-lg">
                    Kategori Posisi
                </h3>
                <button
                    onClick={() => setIsFilterVisible(false)}
                    className="lg:hidden text-gray-400 hover:text-white"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
            <ul className="space-y-2">
                {categories.map((cat) => (
                    <li key={cat.id}>
                        <button
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`w-full text-left flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                                selectedCategory === cat.id
                                    ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg"
                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            <cat.icon className="w-5 h-5" />
                            <span>{cat.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <GuestLayout>
            <div className="min-h-screen bg-gray-900 text-white [background-image:radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_100%)]">
                <header className="bg-black/60 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-4">
                                <a
                                    href="/"
                                    className="max-w-52 rounded-xl overflow-hidden"
                                >
                                    <img
                                        src="/logofest1.png"
                                        alt="FestKarir Logo"
                                        className="w-full h-full object-cover"
                                    />
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Link
                                    href={route("login")}
                                    className="bg-gradient-to-r from-red-700 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-red-600 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20"
                                >
                                    Masuk
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-black/80 to-gray-900"></div>
                    <div className="relative max-w-5xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="pt-16 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-300 to-purple-400 bg-clip-text text-transparent leading-tight"
                        >
                            Bentuk Pengalaman Tak Terlupakan
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto"
                        >
                            Kami mencari individu penuh semangat untuk membantu
                            menciptakan momen magis. Petualangan Anda berikutnya
                            dimulai di sini.
                        </motion.p>
                    </div>
                </section>

                <main className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
                        <aside
                            className={`lg:col-span-1 ${
                                isFilterVisible ? "block" : "hidden"
                            } lg:block`}
                        >
                            <CategoryFilter />
                        </aside>

                        <div className="lg:col-span-3">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-red-300 to-purple-400 bg-clip-text text-transparent">
                                    Lowongan Terbaru ({filteredJobs.length})
                                </h2>
                                <button
                                    onClick={() =>
                                        setIsFilterVisible(!isFilterVisible)
                                    }
                                    className="lg:hidden flex items-center space-x-2 text-gray-300 hover:text-white font-medium transition-colors bg-white/10 px-4 py-2 rounded-lg"
                                >
                                    <Filter className="w-5 h-5" />
                                    <span>Saring</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filteredJobs.map((job) => (
                                    <motion.div
                                        key={job.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        onClick={() => handleJobClick(job)}
                                        className="relative cursor-pointer bg-black/40 backdrop-blur-xl rounded-2xl border border-transparent hover:border-purple-500/50 flex flex-col transition-all duration-300 group overflow-hidden"
                                        style={{
                                            background:
                                                "radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 50%) , rgba(0,0,0,0.4)",
                                        }}
                                    >
                                        {/* Landscape Poster Section - Enforced 16:10 Aspect Ratio */}
                                        <div className="relative w-full aspect-[16/10] bg-black/30 group-hover:opacity-90 transition-opacity duration-300">
                                            {job.image ? (
                                                <img
                                                    src={`/job_images/${job.image}`}
                                                    alt={`${job.title} Poster`}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                // Placeholder with gradient and an icon
                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-black/50">
                                                    <div className="text-purple-400/50">
                                                        {/* Placeholder Icon */}
                                                        <svg
                                                            className="w-16 h-16"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="1"
                                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 14m6-6l.01.01"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            )}
                                            {job.new && (
                                                <span className="absolute top-3 right-3 bg-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-400/40 backdrop-blur-sm">
                                                    Baru
                                                </span>
                                            )}
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6 flex-grow flex flex-col">
                                            <div className="flex-grow">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="flex items-center space-x-4">
                                                        <div>
                                                            <h3 className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors">
                                                                {job.title}
                                                            </h3>
                                                            <p className="text-gray-400 text-sm">
                                                                {job.company}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2 my-5 border-y border-white/10 py-3">
                                                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                                        <MapPin className="w-4 h-4 text-purple-300" />
                                                        <span>
                                                            {job.location}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                                        <Clock className="w-4 h-4 text-purple-300" />
                                                        <span>{job.type}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                                        <DollarSign className="w-4 h-4 text-purple-300" />
                                                        <span>
                                                            {job.salary}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                                        <Briefcase className="w-4 h-4 text-purple-300" />
                                                        <span>
                                                            {job.status}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-4 flex justify-between items-center mt-auto">
                                                <button className="bg-gradient-to-r from-red-700 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-purple-500 transition-all transform hover:scale-105 text-sm font-medium">
                                                    Lamar Sekarang
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />

                <JobDetailModal job={selectedJob} onClose={handleCloseModal} />
            </div>
        </GuestLayout>
    );
};

export default function CareerPage({ featuredJobs }) {
    return <Career featuredJobs={featuredJobs} />;
}
