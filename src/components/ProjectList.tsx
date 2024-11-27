import React from 'react';
import { Project } from './Project';

export function ProjectList() {
    const projects = [
        {
            title: 'Hacker News Clone',
            description: 'A clone of Hacker News with real-time updates using React and Node.js.',
            githubLink: 'https://github.com/Aryan2vb/hacker-news-clone',
            liveLink: 'https://y-hacker-news.vercel.app/news',
        },{
            title: 'MJrkTRACK',
            description: 'A comprehensive web application designed for businesses to efficiently manage customer data and ledger entries.',
            githubLink: 'https://github.com/Aryan2vb/mjrk',
            liveLink: 'https://mjrk01.vercel.app',
        },{
            title: 'biteSpeed',
            description: 'This API identifies and manages contacts based on provided email and/or phone number.  It utilizes a MySQL database to store and retrieve contact information.',
            githubLink: 'https://github.com/Aryan2vb/biteSpeed',
            liveLink: 'https://bite-speed-lemon.vercel.app/',
        },
        {
            title: 'Suggestify',
            description: 'Suggestify is an intelligent, fast, and efficient autocomplete system built using a hybrid approach that combines the power of a Trie data structure and a MySQL database. Designed to enhance user typing experiences, it offers real-time word suggestions and autocompletion based on user input.',
            githubLink: 'https://github.com/Aryan2vb/Suggestify-Backend.git',
            liveLink: 'https://suggestify-2.onrender.com',
        },
        {
            title: 'Campus Issue Tracker API',
            description: 'Platform for students and faculty to report, track, and resolve campus-related issues efficiently.',
            githubLink: 'https://github.com/Aryan2vb/Campus-Issue-Tracker',
            liveLink: 'https://campus-issue-tracker.vercel.app',
        },
        {
            title: 'Goibibo Clone',
            description: 'A clone of the Goibibo travel platform with dynamic search and booking features.',
            githubLink: 'https://github.com/yourusername/goibibo-clone',
            liveLink: 'https://goibibo-clone.vercel.app',
        },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-white text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        githubLink={project.githubLink}
                        liveLink={project.liveLink}
                    />
                ))}
            </div>
        </div>
    );
}