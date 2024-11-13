import React from 'react';
import { Link } from './Link';

interface Post {
  title: string;
  description: string;
}

export function Writing() {
  const posts: Post[] = [
    {
      title: "The Future of Web Development",
      description: "Exploring upcoming trends and technologies"
    },
    {
      title: "Building Scalable Systems",
      description: "Lessons learned from scaling applications"
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-white text-lg font-medium">Writing</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="group cursor-pointer">
            <h3 className="text-white text-lg font-medium group-hover:text-neutral-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-neutral-400 mt-1 text-sm">{post.description}</p>
          </div>
        ))}
        <Link href="/posts" className="text-sm text-neutral-400">
          All posts →
        </Link>
      </div>
    </div>
  );
}