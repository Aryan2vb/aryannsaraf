import React from "react";

export function Profile() {
  return (
    <div className="space-y-6 flex items-center">
      {/* Image section */}
      <div
        className="space-y-4 animate__animated animate__fadeInLeft"
        style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
      >
        <img
          src="/IMG_5042 (1).jpg"
          alt="Profile"
          className="h-70 w-50 rounded-lg object-cover" // Adjusted size and added object-cover
        />
      </div>

      {/* Description section */}
      <div
        className="space-y-4 animate__animated animate__fadeInRight ml-6"
        style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
      >
        <h1 className="text-white text-3xl font-medium">Aryan Soni</h1>
        <p className="text-neutral-400">Learner</p>

        <p className="text-neutral-300 leading-relaxed">
          I’m a aspiring software developer focused on backend development and
          working with databases. I enjoy creating efficient and reliable
          systems that support the smooth functioning of applications. I’ve
          worked with technologies like Node.js, Express.js, and databases like
          MySQL and MongoDB.
        </p>
        <div className="mt-6">
          <h2 className="text-white text-xl font-medium">Work Experience</h2>
          <div className="mt-2">
            <h3 className="text-neutral-300 font-medium">
              Software Engineering Intern
            </h3>
            <p className="text-neutral-400">Company Name</p>
            <p className="text-neutral-400">June 2024 - August 2024</p>
            <ul className="list-disc list-inside text-neutral-400 ml-6">
              <li>
                Developed and maintained backend APIs using Node.js and
                Express.js.
              </li>
              <li>
                Implemented database schemas and optimized queries for improved
                performance.
              </li>
              <li>
                Collaborated with a team to deliver projects on time and within
                budget.
              </li>
            </ul>
          </div>
        </div>

        <p className="text-neutral-400">
          I have a strong interest in designing database schemas, optimizing
          performance, and developing APIs that enable seamless communication
          between systems. I find it rewarding to build solutions that are not
          only functional but also scalable and secure.
        </p>

        <p className="text-neutral-400">
          I’m always eager to explore new ideas, collaborate on projects, and
          learn about emerging technologies. For me, solving challenges and
          building systems that have a real-world impact is what drives my
          interest in software development.
        </p>
      </div>
    </div>
  );
}
