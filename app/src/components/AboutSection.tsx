"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#4a4a4a]">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FADADD] to-[#D2B48C] rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Hi there! I'm Amelia Putri Ailsa (Amel), a passionate [Your Profession] with a
              love for creating beautiful and functional designs. With [X] years of
              experience, I specialize in [Your Specialization].
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              I believe in the power of great design to solve real problems and
              create meaningful user experiences. When I'm not working, you can
              find me [Your Hobbies/Interests], always looking to learn and grow.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              My approach combines strategic thinking with creative execution,
              ensuring that every project not only looks stunning but also
              delivers measurable results.
            </p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex gap-8"
            >
              <div>
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">5+</p>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">50+</p>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="card-soft p-8 md:p-12"
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-[#D2B48C] mb-2">
                  📍 Location
                </h4>
                <p className="text-gray-600">[Your City, Country]</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#D2B48C] mb-2">
                  📞 Phone
                </h4>
                <p className="text-gray-600">[+62 123 4567 8900]</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#D2B48C] mb-2">
                  ✉️ Email
                </h4>
                <p className="text-gray-600 break-all">[your.email@example.com]</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#D2B48C] mb-2">
                  🎓 Availability
                </h4>
                <p className="text-gray-600">Available for freelance work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
