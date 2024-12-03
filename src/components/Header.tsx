import React, { useState } from 'react';
import { Link } from './Link';

export function Header() {
    const [activeLink, setActiveLink] = useState<string>('home');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <nav className="fixed top-0 w-full bg-neutral-900/50 backdrop-blur-sm z-50">
            <div className="max-w-4xl mx-auto px-6 py-4 flex justify-center items-center">
                <div className="flex gap-6 text-neutral-400">
                    <div
                        className={`cursor-pointer ${activeLink === 'home' ? 'text-white' : 'hover:text-white'} transition-colors`}
                        onClick={() => handleLinkClick('home')}
                    >
                        <Link href="/">home</Link>
                    </div>
                    <div
                        className={`cursor-pointer ${activeLink === 'resume' ? 'text-white' : 'hover:text-white'} transition-colors`}
                        onClick={() => handleLinkClick('resume')}
                    >
                        <Link href="/Resume-Aryan Soni (18).pdf">resume</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}