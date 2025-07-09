import React from "react";
import {
    MapPin,
    Clock,
    DollarSign,
    X,
    Briefcase,
    ListChecks,
    Sparkles,
    ImageIcon,
} from "lucide-react";

const JobDetailModal = ({ job, onClose }) => {
    if (!job) return null;

    const responsibilities =
        job.responsibilities
            ?.split("\n")
            .filter((item) => item.trim() !== "") || [];
    const qualifications =
        job.qualifications?.split("\n").filter((item) => item.trim() !== "") ||
        [];

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex justify-center items-center p-4 animate-fade-in"
            onClick={onClose}
        >
            {/* --- Main Modal Container --- */}
            <div
                className="bg-gray-900 bg-opacity-70 backdrop-blur-xl border border-white/10 rounded-2xl w-full max-w-3xl h-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl shadow-purple-500/20"
                onClick={(e) => e.stopPropagation()}
            >
                {/* --- Top Section: Portrait Poster Image --- */}
                <div className="w-full h-80 flex-shrink-0 bg-black/20">
                    {job.image ? (
                        <img
                            src={`/job_images/${job.image}`}
                            alt={job.title}
                            className="w-full h-full object-cover" // object-cover is key for poster-like images
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900/50 text-purple-300/50">
                            <ImageIcon size={64} />
                            <span className="mt-4 font-medium">FestKarir</span>
                        </div>
                    )}
                </div>

                {/* --- Bottom Section: Scrollable Content for Mobile --- */}
                <div className="flex-1 flex flex-col bg-gray-900/80 overflow-hidden">
                    {/* Header */}
                    <header className="p-6 flex-shrink-0 flex items-start justify-between border-b border-white/10">
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-red-300 to-purple-400 bg-clip-text text-transparent">
                                {job.title}
                            </h2>
                            <p className="text-lg text-purple-200 font-medium">
                                {job.company}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 ml-4 rounded-full text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>
                    </header>

                    {/* Scrollable Content Area */}
                    <div className="flex-grow p-6 space-y-8 overflow-y-auto">
                         {/* Job Meta Info */}
                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-300">
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
                                <span>{job.salary || "Kompetitif"}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="flex items-center text-xl font-bold text-white mb-4">
                                <Briefcase className="w-5 h-5 mr-3 text-purple-400" />
                                Deskripsi Pekerjaan
                            </h3>
                            <div
                                className="text-gray-300 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: job.description,
                                }}
                            />
                        </div>

                        {/* Responsibilities */}
                        {responsibilities.length > 0 && (
                            <div>
                                <h3 className="flex items-center text-xl font-bold text-white mb-4">
                                    <ListChecks className="w-5 h-5 mr-3 text-purple-400" />
                                    Tanggung Jawab
                                </h3>
                                <ul className="space-y-2 list-disc list-inside text-gray-300">
                                    {responsibilities.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Qualifications */}
                        {qualifications.length > 0 && (
                            <div>
                                <h3 className="flex items-center text-xl font-bold text-white mb-4">
                                    <Sparkles className="w-5 h-5 mr-3 text-purple-400" />
                                    Kualifikasi
                                </h3>
                                <ul className="space-y-2 list-disc list-inside text-gray-300">
                                    {qualifications.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sticky Footer */}
                    <footer className="p-6 flex-shrink-0 bg-gray-900/50 border-t border-white/10">
                        <a
                            href={job.external_link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center bg-gradient-to-r from-red-700 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20 font-medium"
                        >
                            Lamar Sekarang
                        </a>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default JobDetailModal;