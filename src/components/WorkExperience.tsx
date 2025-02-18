import React from "react";

interface Experience {
  title: string;
  company: string;
  dates: string;
  techStack: string[];
  descriptionPoints: string[]; // Changed to an array of points
}

export function WorkExperience() {
  const experiences: Experience[] = [
    {
      title: "Software Development Intern",
      company: "Rocketium",
      dates: "January 2025 - February 2025",
      techStack: [
        "Photoshop Plugin Development",
        "GoCobalt",
        "Workfront",
        "JavaScript",
        "React",
        "Node.js",
      ], // Added Node.js for example
      descriptionPoints: [
        "Developed and contributed to a Photoshop plugin, automating design tasks and enhancing workflow efficiency for creative teams.",
        "Integrated Rocketium’s project management system with Workfront via GoCobalt, streamlining data synchronization between project and product management tools.",
        "Collaborated with a team of engineers to design and implement new features.", // Example addition
        "Improved code quality through refactoring and code reviews.", // Example addition
      ],
    },
    // Add more experience entries here as needed
  ];

  return (
    <section className="py-8 md:py-12">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8 px-4 md:px-0">
        Professional Experience
      </h2>
      <div className="space-y-6 md:space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-neutral-800 p-4 md:p-8 rounded-lg shadow-lg mx-4 md:mx-0"
          >
            <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-6">
              <div>
                <h3 className="text-white text-lg md:text-xl font-semibold">
                  {experience.company}
                </h3>
                <h4 className="text-neutral-300 text-base md:text-lg mt-1">
                  {experience.title}
                </h4>
              </div>
              <p className="text-neutral-400 text-sm md:text-base mt-2 md:mt-0">
                {experience.dates}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h5 className="text-neutral-300 text-lg font-medium mb-4">
                  Technologies Used
                </h5>
                <ul className="list-disc list-inside text-neutral-300 text-base">
                  {experience.techStack.map((tech, i) => (
                    <li key={i} className="mb-2">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-neutral-300 text-lg font-medium mb-4">
                  Key Accomplishments
                </h5>
                <ul className="list-disc list-inside text-neutral-300 text-base">
                  {experience.descriptionPoints.map((point, i) => (
                    <li key={i} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
