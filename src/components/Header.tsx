import React from 'react';
import { Link } from './Link';

export function Header() {
  return (
      <nav className="fixed top-0 w-full bg-neutral-900/50 backdrop-blur-sm z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-neutral-400 hover:text-white transition-colors">
            <Link href="/">home</Link>
          </div>
          <div className="flex gap-6 text-neutral-400">
            <Link href="/posts">posts</Link>
            <Link href="/Resume-Aryan Soni (13).pdf">resume</Link>
          </div>
        </div>
      </nav>
  );
}