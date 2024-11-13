import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { Link } from './Link';

export function Profile() {
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <img
                    src="profile.jpeg"
                    alt="Profile"
                    className="w-16 h-16 rounded-lg"
                />
                <div>
                    <h1 className="text-white text-xl font-medium">Aryan Soni</h1>
                    <p className="text-neutral-400">Learner</p>
                </div>
            </div>

            <p className="text-neutral-300 leading-relaxed">
                I am an aspiring software developer with a passion for full-stack development.
                My journey in technology started with web development, and over the years, I've
                honed my skills in JavaScript, React.js, Node.js, and several back-end technologies.
                I'm constantly eager to learn new concepts and stay updated with the latest in the tech world.
            </p>

            <p className="text-neutral-400">
                When I'm not coding, you can find me exploring new technologies, collaborating with others on projects,
                or solving problems through competitive programming. I am passionate about building impactful solutions
                that can make a difference in the real world.
            </p>
        </div>
    );
}