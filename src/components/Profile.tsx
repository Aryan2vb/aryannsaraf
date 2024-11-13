import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { Link } from './Link';

export function Profile() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150"
          alt="Profile"
          className="w-16 h-16 rounded-lg"
        />
        <div>
          <h1 className="text-white text-xl font-medium">John Doe</h1>
          <p className="text-neutral-400">Full Stack Developer</p>
        </div>
      </div>
      
      <p className="text-neutral-300 leading-relaxed">
        Writing impactful & elegant software. Relentlessly devoted to intricacy, efficiency, and
        detailed polish. Unsatisfiably curious about magical design and high performance systems.
      </p>

      <p className="text-neutral-400">
        Based in San Francisco, USA. Currently working as Senior Developer at Tech Corp.
      </p>
    </div>
  );
}