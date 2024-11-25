import React from 'react';

interface ProjectProps {
    title: string;
    description: string;
    githubLink: string;
    liveLink: string;
}

export function Project({ title, description, githubLink, liveLink }: ProjectProps) {
    return (
        <div className="group cursor-pointer p-4 bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            {/* Title and Description */}
            <h3 className="text-white text-xl font-semibold group-hover:text-neutral-400 transition-colors">
                {title}
            </h3>
            <p className="text-neutral-300 mt-2 text-sm leading-relaxed line-clamp-3">
                {description}
            </p>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-medium bg-neutral-700 px-4 py-2 rounded-lg mb-2 hover:bg-neutral-600"
                >
                    View Project
                </a>
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-medium bg-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-600"
                >
                    Live
                </a>
            </div>
        </div>
    );
}