"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-white border-t border-gray-200">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold gradient-text mb-3">APA</h3>
            <p className="text-gray-600 leading-relaxed">
              Personal portfolio showcasing my journey in [Your Field]. Let's
              create something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-[#4a4a4a] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-[#FADADD] transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-[#4a4a4a] mb-4">
              Contact
            </h4>
            <div className="space-y-2">
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:[your.email@example.com]"
                  className="text-[#FADADD] hover:underline"
                >
                  [your.email@example.com]
                </a>
              </p>
              <p className="text-gray-600">
                Phone:{" "}
                <a
                  href="tel:[+62-phone-number]"
                  className="text-[#FADADD] hover:underline"
                >
                  [+62 123 4567 8900]
                </a>
              </p>
              <p className="text-gray-600">
                Location: <span className="text-[#D2B48C]">[Your City]</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-200 py-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Amelia Putri Ailsa. All rights reserved.
            </p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                className="text-gray-600 hover:text-[#FADADD] transition-colors text-sm"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-600 hover:text-[#FADADD] transition-colors text-sm"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#FADADD] to-[#D2B48C] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          ↑
        </motion.button>
      </motion.div>
    </footer>
  );
}
