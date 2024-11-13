import React from 'react';
import { Project } from './Project';
import { Link } from './Link';
import { FaGithub } from 'react-icons/fa';  // Importing GitHub icon from React Icons

export function ProjectList() {
    return (
        <div className="space-y-8">
            <h2 className="text-white text-lg font-medium">Projects</h2>
            <div className="space-y-6">
                <Project
                    title="Hacker News Clone"
                    description="Built a clone of Hacker News with real-time updates and user authentication using React and Node.js."
                />
                <Link href="https://y-hacker-news.vercel.app" className="text-sm text-neutral-400 flex items-center">
                    <FaGithub className="mr-2" /> View Project →
                </Link>

                <Project
                    title="Campus Issue Tracker"
                    description="Developed a platform for students and faculty to report, track, and resolve campus-related issues."
                />
                <Link href="https://github.com/Aryan2vb/campus-issue-tracker" className="text-sm text-neutral-400 flex items-center">
                    <FaGithub className="mr-2" /> View Project →
                </Link>

                <Project
                    title="Goibibo"
                    description="A Goibibo Clone"
                />
                <Link href="https://github.com/Aryan2vb/EndSem-Project---Goibibo---EndSem-Projects-Goibibo---xcib2gttdyqe.git" className="text-sm text-neutral-400 flex items-center">
                    <FaGithub className="mr-2" /> View Project →
                </Link>

                {/*<Project*/}
                {/*    title="Project Beta"*/}
                {/*    description="Enterprise-grade solution for modern workflows"*/}
                {/*/>*/}
                {/*<Link href="https://github.com/your-username/project-beta" className="text-sm text-neutral-400 flex items-center">*/}
                {/*    <FaGithub className="mr-2" /> View Project →*/}
                {/*</Link>*/}

                {/*<Link href="/projects" className="text-sm text-neutral-400">*/}
                {/*    All projects →*/}
                {/*</Link>*/}
            </div>
        </div>
    );
}