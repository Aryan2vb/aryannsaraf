import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { Link } from './Link';

export function Footer() {
  return (
    <footer className="mt-24 pb-12 text-neutral-400">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-white font-medium">Connect</h3>
          <div className="flex gap-4">
            <Link href="https://github.com/Aryan2vb">
              <GithubIcon className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com/aryannsaraf">
              <TwitterIcon className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/aryan-soni-a5b359275/" target="_blank">
              <LinkedinIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="text-sm">
          <p>Reach out at aryansoni3105@gmail.com</p>
          <p className="mt-1">{new Date().getFullYear()} © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}