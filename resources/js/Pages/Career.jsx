import React, { useState } from "react";
import {
    Search,
    MapPin,
    Clock,
    DollarSign,
    Star,
    ChevronRight,
    Filter,
    Heart,
    Share2,
    BookmarkPlus,
    X,
    Building,
    Users,
    Briefcase,
} from "lucide-react";
import GuestLayout from "@/Layouts/GuestLayout";
import JobDetailModal from "@/Components/LandingPage/JobDetailModal";
import Footer from "@/Components/Footer";

const Career = ({ featuredJobs }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [locationFilter, setLocationFilter] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [likedJobs, setLikedJobs] = useState(new Set());
    const [savedJobs, setSavedJobs] = useState(new Set());
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

    const toggleLike = (jobId) => {
        setLikedJobs((prev) => {
            const newSet = new Set(prev);
            newSet.has(jobId) ? newSet.delete(jobId) : newSet.add(jobId);
            return newSet;
        });
    };

    const toggleSave = (jobId) => {
        setSavedJobs((prev) => {
            const newSet = new Set(prev);
            newSet.has(jobId) ? newSet.delete(jobId) : newSet.add(jobId);
            return newSet;
        });
    };

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
        <div>
            <div className="min-h-screen bg-gray-900 text-white [background-image:radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_100%)]">
                <header className="bg-black/60 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-4">
                                {/* Avatar Image */}
                                <div className="max-w-52 rounded-xl overflow-hidden">
                                    <img
                                        src="logofest1.png"
                                        alt="FestKarir"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            {/* <nav className="hidden md:flex space-x-8">
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white font-medium transition-colors"
                                >
                                    Lowongan
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white font-medium transition-colors"
                                >
                                    Festival Kami
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white font-medium transition-colors"
                                >
                                    Kehidupan di FestCo
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white font-medium transition-colors"
                                >
                                    Tentang Kami
                                </a>
                            </nav> */}
                            <div className="flex items-center space-x-4">
                                <button className="bg-gradient-to-r from-red-700 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-red-600 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20">
                                    Masuk
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-black/80 to-gray-900"></div>
                    <div className="relative max-w-5xl mx-auto">
                        <h1 className="pt-16 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-300 to-purple-400 bg-clip-text text-transparent leading-tight animate-fade-in-down">
                            Bentuk Pengalaman Tak Terlupakan
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto animate-fade-in-up">
                            Kami mencari individu penuh semangat untuk membantu
                            menciptakan momen magis. Petualangan Anda berikutnya
                            dimulai di sini.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <main className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Filters Sidebar (Desktop) */}
                        <aside
                            className={`lg:col-span-1 ${
                                isFilterVisible ? "block" : "hidden"
                            } lg:block`}
                        >
                            <CategoryFilter />
                        </aside>

                        {/* Jobs Grid */}
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
                                    <div
                                        key={job.id}
                                        onClick={() => handleJobClick(job)}
                                        className="relative cursor-pointer bg-black/40 backdrop-blur-xl rounded-2xl border border-transparent hover:border-purple-500/50 p-6 flex flex-col transition-all duration-300 group"
                                        style={{
                                            background:
                                                "radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 40%) , rgba(0,0,0,0.4)",
                                        }}
                                    >
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
                                                {job.new && (
                                                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 border border-purple-400/30">
                                                        Baru
                                                    </span>
                                                )}
                                            </div>

                                            <div className="space-y-2 my-5 border-y border-white/10 py-3">
                                                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                                    {" "}
                                                    <MapPin className="w-4 h-4 text-purple-300" />{" "}
                                                    <span>{job.location}</span>{" "}
                                                </div>
                                                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                                    {" "}
                                                    <Clock className="w-4 h-4 text-purple-300" />{" "}
                                                    <span>{job.type}</span>{" "}
                                                </div>
                                                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                                    {" "}
                                                    <DollarSign className="w-4 h-4 text-purple-300" />{" "}
                                                    <span>{job.salary}</span>{" "}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4 flex justify-between items-center mt-auto">
                                            <button className="bg-gradient-to-r from-red-700 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-purple-500 transition-all transform hover:scale-105 text-sm font-medium">
                                                {" "}
                                                Lamar Sekarang{" "}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* <div className="text-center mt-16">
                                <button className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-xl hover:bg-white/20 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/10 font-medium inline-flex items-center space-x-2">
                                    <span>Lihat Lebih Banyak</span>
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div> */}
                        </div>
                    </div>
                </main>

                <Footer />

                <JobDetailModal job={selectedJob} onClose={handleCloseModal} />
            </div>
        </div>
    );
};

export default Career;
