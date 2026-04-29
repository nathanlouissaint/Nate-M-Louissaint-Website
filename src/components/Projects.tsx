const projects = [
  {
    title: "AI StudyMate 3rd Place Hackathon Winner",
    description:
      "Full-stack application for generating study materials using AI. Built with focus on performance and real-time interaction.",
    tech: ["React", "Node", "API", "AI"],
    link: "https://campus.kennesaw.edu/colleges-departments/ccse/events/hackathon/docs/hackathon-past-winners.pdf", // replace with Devpost/GitHub/live demo
  },
  {
    title: "Performance Monitoring Tool",
    description:
      "System for tracking Core Web Vitals and user performance metrics across applications.",
    tech: ["Analytics", "Dashboards", "APIs"],
  },
  {
    title: "E-commerce System",
    description:
      "Custom-built commerce experience with optimized frontend performance and conversion-focused flows.",
    tech: ["React", "Payments", "UX"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
        Selected Work
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-white/10 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">
              {project.title}
            </h3>

            <p className="text-gray-200 mb-4">
              {project.description}
            </p>

            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs text-white border border-white/30 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-white underline"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};