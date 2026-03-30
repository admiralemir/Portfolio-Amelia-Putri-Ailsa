"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section id="contact" className="py-20 md:py-32">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#4a4a4a]">Get in </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Open for collaboration, freelance work, and exciting opportunities.
            Let’s connect and create something meaningful.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FADADD] to-[#D2B48C] rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="card-soft p-8">
            <h3 className="text-2xl font-semibold text-[#4a4a4a] mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Feel free to reach out for project discussions, partnerships, or
              just a friendly hello.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:[your.email@example.com]"
                className="flex items-center gap-3 text-gray-700 hover:text-[#FADADD] transition-colors"
              >
                <span className="text-xl">✉️</span>
                <span>[your.email@example.com]</span>
              </a>
              <a
                href="https://wa.me/[6281234567890]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-[#D2B48C] transition-colors"
              >
                <span className="text-xl">💬</span>
                <span>[+62 812 3456 7890]</span>
              </a>
              <p className="flex items-center gap-3 text-gray-700">
                <span className="text-xl">📍</span>
                <span>[Kota, Negara]</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="card-soft p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#4a4a4a] mb-4">
                Contact Me
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Prefer quick contact? Use one of the options below and I will
                get back to you as soon as possible.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="mailto:[your.email@example.com]"
                className="btn-pink text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Email Me
              </motion.a>
              <motion.a
                href="https://wa.me/[6281234567890]"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                WhatsApp Me
              </motion.a>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://linkedin.com/in/[username]"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-r from-[#FADADD] to-[#FFC0CB] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                in
              </a>
              <a
                href="https://instagram.com/[username]"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-r from-[#D2B48C] to-[#C4A484] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                @
              </a>
              <a
                href="https://x.com/[username]"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-r from-[#FADADD] to-[#D2B48C] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                X
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
