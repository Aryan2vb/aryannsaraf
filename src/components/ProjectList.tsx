import React from 'react';
import { Project } from './Project';
import { Link } from './Link';

export function ProjectList() {
  return (
    <div className="space-y-8">
      <h2 className="text-white text-lg font-medium">Projects</h2>
      <div className="space-y-6">
        <Project
          title="Project Alpha"
          description="A revolutionary app that transforms how we interact with data"
        />
        <Project
          title="Project Beta"
          description="Enterprise-grade solution for modern workflows"
        />
        <Link href="/projects" className="text-sm text-neutral-400">
          All projects →
        </Link>
      </div>
    </div>
  );
}