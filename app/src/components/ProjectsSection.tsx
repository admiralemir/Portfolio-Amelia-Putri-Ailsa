"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  role: string;
  type: string;
  year: string;
  tags: string[];
}

export default function ProjectsSection() {
  const projectsData: Project[] = [
    {
      title: "[Project Name 1]",
      description:
        "[Brief description of your project and the problem it solved]",
      role: "[Your Role - e.g., Lead Designer]",
      type: "[Project Type - e.g., UI/UX Design]",
      year: "2024",
      tags: ["Design", "Figma", "User Research"],
    },
    {
      title: "[Project Name 2]",
      description:
        "[Brief description of your project and the problem it solved]",
      role: "[Your Role - e.g., Product Manager]",
      type: "[Project Type - e.g., Product Design]",
      year: "2024",
      tags: ["Product", "Strategy", "Design"],
    },
    {
      title: "[Project Name 3]",
      description:
        "[Brief description of your project and the problem it solved]",
      role: "[Your Role - e.g., UX Designer]",
      type: "[Project Type - e.g., Mobile App]",
      year: "2023",
      tags: ["Mobile", "Design", "Development"],
    },
    {
      title: "[Project Name 4]",
      description:
        "[Brief description of your project and the problem it solved]",
      role: "[Your Role - e.g., Designer]",
      type: "[Project Type - e.g., Website]",
      year: "2023",
      tags: ["Web", "Design", "Responsive"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#4a4a4a]">Projects & </span>
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FADADD] to-[#D2B48C] rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="card-soft p-8 h-full flex flex-col"
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(250, 218, 221, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-[#4a4a4a] flex-1">
                      {project.title}
                    </h3>
                    <motion.span
                      className="text-[#FADADD] font-semibold text-sm whitespace-nowrap ml-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.year}
                    </motion.span>
                  </div>
                  <p className="text-[#D2B48C] font-medium text-sm">
                    {project.type}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Role */}
                <div className="mb-4 pb-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-[#4a4a4a]">
                      Role:{" "}
                    </span>
                    {project.role}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-[#FFF9F7] text-[#D2B48C] text-xs font-medium rounded-full border border-[#FADADD]/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* View Project Link */}
                <motion.a
                  href="#"
                  className="mt-4 text-[#FADADD] font-medium text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 4 }}
                >
                  View Project →
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
