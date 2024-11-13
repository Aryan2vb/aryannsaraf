import React from 'react';

interface LinkProps {
    href: string,
    children: React.ReactNode,
    className?: string,
    target?: string
}

export function Link({href, children, className = '', target}: LinkProps) {
    return (
        <a
            href={href}
            className={`hover:text-white transition-colors ${className}`}
        >
            {children}
        </a>
    );
}