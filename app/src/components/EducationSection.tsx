"use client";

import { motion } from "framer-motion";

interface Education {
  title: string;
  institution: string;
  year: string;
  description: string;
}

export default function EducationSection() {
  const educationData: Education[] = [
    {
      title: "[Degree Name - e.g., Bachelor of Science]",
      institution: "[University Name]",
      year: "[2019 - 2023]",
      description: "Major: [Your Major] | GPA: [Your GPA]",
    },
    {
      title: "[Certification/Course Name]",
      institution: "[Course Platform]",
      year: "[2024]",
      description: "Relevant skills and topics covered",
    },
    {
      title: "[High School Diploma]",
      institution: "[High School Name]",
      year: "[2015 - 2019]",
      description: "Academic Excellence Award",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="education" className="py-20 md:py-32">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#4a4a4a]">My </span>
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FADADD] to-[#D2B48C] rounded-full" />
        </motion.div>

        <div className="max-w-3xl">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-8 pb-8 border-l-4 border-[#FADADD] pl-8 relative"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#FADADD] to-[#D2B48C] flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-3 h-3 bg-white rounded-full" />
              </motion.div>

              <motion.div
                className="card-soft p-6 hover:translate-x-2 transition-transform duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-[#4a4a4a]">
                      {edu.title}
                    </h3>
                    <p className="text-[#D2B48C] font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-[#FADADD] font-semibold whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-600">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
