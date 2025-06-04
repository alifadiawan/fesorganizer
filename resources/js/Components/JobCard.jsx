import React from 'react'

const JobCard = ({ job }) => {
    const placeholderImage = `https://placehold.co/400x300/2a0033/ffcc00?text=${encodeURIComponent(job.title.substring(0, 15))}`;

    return (
        // Make the entire card clickable, navigating to the job details page
        <a
            href={`/careers/${job.id}`} // Or use Link component: to={`/careers/${job.id}`}
            className="block bg-[#1a0033] bg-opacity-60 backdrop-blur-md border border-[#4a0033] rounded-xl overflow-hidden hover:border-[#ffcc00] transition-all duration-300 group"
            aria-label={`View details for ${job.title}`}
        >
            <div className="flex flex-col md:flex-row">
                {/* Image Column - Responsive */}
                <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                    <img
                        src={job.imageUrl || placeholderImage}
                        alt={`Image for ${job.title}`}
                        className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }}
                    />
                </div>

                {/* Content Column */}
                <div className="p-5 md:p-6 flex-grow">
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

                    <p className="text-gray-300 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3 md:line-clamp-2 group-hover:line-clamp-none transition-all duration-200">
                        {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {/* Buttons are now part of the larger clickable card,
                but you can keep them for visual cues or specific actions if needed.
                For this example, they are visually distinct but the whole card links.
            */}
                        <span // Changed from Link to span as the parent is an <a>
                            // href={`/careers/${job.id}`} // Redundant as parent is a link
                            className="inline-flex items-center justify-center px-4 py-1.5 bg-[#4a0033] text-white rounded-full group-hover:bg-[#ffcc00] group-hover:text-black transition-colors duration-300 text-xs font-medium"
                        >
                            View Details
                        </span>
                        <span // Changed from Link to span
                            // href={`/careers/${job.id}/apply`} // Redundant
                            className="inline-flex items-center justify-center px-4 py-1.5 bg-transparent border border-[#ffcc00] text-[#ffcc00] rounded-full group-hover:bg-[#ffcc00] group-hover:text-black transition-colors duration-300 text-xs font-medium"
                        >
                            Apply Now
                        </span>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default JobCard