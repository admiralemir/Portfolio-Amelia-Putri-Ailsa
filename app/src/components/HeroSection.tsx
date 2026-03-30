"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8"
    >
      <motion.div
        className="section-container w-full max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div variants={containerVariants}>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            >
              <span className="text-[#4a4a4a]">Hi, I'm</span>{" "}
              <span className="gradient-text">Amelia Putri Ailsa</span>
            </motion.h1>


            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg"
            >
              Passionate about Data Analyst and Data Management. Let's
              collaborate and bring your ideas to life.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-lg text-[#D2B48C] font-medium mb-6"
            >
              Scroll down or click the navbar to explore my work and experience!
            </motion.p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FADADD] to-[#D2B48C] rounded-3xl blur-2xl opacity-50" />
              <div className="relative w-full h-full bg-gradient-to-br from-[#FADADD] to-[#FFC0CB] rounded-3xl p-1 overflow-hidden">
                <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                  <Image
                    src="/profile.jpg"
                    alt="Profile Picture"
                    width={300}
                    height={300}
                    className="rounded-3xl object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
