import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
}

export function Project({ title, description }: ProjectProps) {
  return (
    <div className="group cursor-pointer">
      <h3 className="text-white text-lg font-medium group-hover:text-neutral-400 transition-colors">
        {title}
      </h3>
      <p className="text-neutral-400 mt-1 text-sm">
        {description}
      </p>
    </div>
  );
}