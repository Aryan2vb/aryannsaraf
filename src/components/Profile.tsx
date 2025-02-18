import React from "react";

export function Profile() {
  return (
    <div className="space-y-6 flex flex-col md:flex-row items-center">
      {/* Image section */}
      <div
        className="space-y-4 animate__animated animate__fadeInLeft w-full md:w-auto"
        style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
      >
        <img
          src="/IMG_5042 (1).jpg"
          alt="Profile"
          className="h-64 w-64 md:h-[600px] md:w-[2000px] rounded-lg object-cover mx-auto"
        />
      </div>

      {/* Description section */}
      <div
        className="space-y-4 animate__animated animate__fadeInRight mt-6 md:mt-0 md:ml-6 px-4 md:px-0 text-center md:text-left"
        style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
      >
        <h1 className="text-white text-2xl md:text-3xl font-medium">Aryan Soni</h1>
        <p className="text-neutral-400 text-base md:text-lg">Learner</p>

        <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
          I’m a aspiring software developer focused on backend development and
          working with databases. I enjoy creating efficient and reliable
          systems that support the smooth functioning of applications. I’ve
          worked with technologies like Node.js, Express.js, and databases like
          MySQL and MongoDB.
        </p>

        <p className="text-neutral-400 text-sm md:text-base">
          I have a strong interest in designing database schemas, optimizing
          performance, and developing APIs that enable seamless communication
          between systems. I find it rewarding to build solutions that are not
          only functional but also scalable and secure.
        </p>

        <p className="text-neutral-400 text-sm md:text-base">
          I’m always eager to explore new ideas, collaborate on projects, and
          learn about emerging technologies. For me, solving challenges and
          building systems that have a real-world impact is what drives my
          interest in software development.
        </p>
      </div>
    </div>
  );
}
