"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: string;
}

export default function SkillsSection() {
  const skillsData: Skill[] = [
    { name: "Time Management", level: 90, category: "Soft Skills" },
    { name: "Problem Solving", level: 88, category: "Soft Skills" },
    { name: "Adaptability", level: 85, category: "Soft Skills" },
    { name: "Ability to Learn Quickly", level: 80, category: "Soft Skills" },
    { name: "Good Team Collaboration", level: 80, category: "Soft Skills" },
    { name: "UI/UX Design", level: 85, category: "Technical" },
    { name: "Figma", level: 88, category: "Technical" },
    { name: "Web Design", level: 82, category: "Technical" },
    { name: "Prototyping", level: 86, category: "Technical" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <motion.div variants={itemVariants} className="mb-6">
      <div className="flex justify-between mb-2">
        <h4 className="font-medium text-[#4a4a4a]">{skill.name}</h4>
        <span className="text-[#FADADD] font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#FADADD] to-[#D2B48C] rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#4a4a4a]">Personal </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FADADD] to-[#D2B48C] rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Soft Skills */}
          <motion.div
            variants={itemVariants}
            className="card-soft p-8"
          >
            <h3 className="text-2xl font-semibold text-[#D2B48C] mb-8">
              🎯 Soft Skills
            </h3>
            <motion.div variants={containerVariants}>
              {skillsData
                .filter((s) => s.category === "Soft Skills")
                .map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
            </motion.div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            variants={itemVariants}
            className="card-soft p-8"
          >
            <h3 className="text-2xl font-semibold text-[#D2B48C] mb-8">
              💻 Technical Skills
            </h3>
            <motion.div variants={containerVariants}>
              {skillsData
                .filter((s) => s.category === "Technical")
                .map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Skill Badges */}
        <motion.div variants={itemVariants} className="mt-12 pt-12 border-t-2 border-gray-200">
          <h3 className="text-2xl font-semibold text-[#4a4a4a] mb-6">
            Also Experienced In
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Adobe XD", "Sketch", "User Research", "Wireframing", "Prototyping", "Front-end", "Responsive Design", "Accessibility"].map(
              (badge, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-[#FADADD] to-[#FFC0CB] text-white rounded-full font-medium text-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {badge}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
