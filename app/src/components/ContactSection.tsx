"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
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
            <span className="text-[#4a4a4a]">Let's </span>
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind or
            just want to chat, feel free to reach out.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FADADD] to-[#D2B48C] rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-[#4a4a4a] mb-8">
                Get In Touch
              </h3>
            </div>

            {/* Email */}
            <motion.a
              href="mailto:[your.email@example.com]"
              className="card-soft p-6 flex gap-4 group cursor-pointer"
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FADADD] to-[#D2B48C] flex items-center justify-center text-white text-2xl"
                whileHover={{ rotate: 10 }}
              >
                ✉️
              </motion.div>
              <div>
                <h4 className="font-semibold text-[#4a4a4a] group-hover:text-[#FADADD] transition-colors">
                  Email
                </h4>
                <p className="text-gray-600 text-sm">[your.email@example.com]</p>
                <p className="text-gray-600 text-xs mt-1">I'll respond within 24 hours</p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/[+62-phone-number]"
              target="_blank"
              rel="noopener noreferrer"
              className="card-soft p-6 flex gap-4 group cursor-pointer"
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D2B48C] to-[#C4A484] flex items-center justify-center text-white text-2xl"
                whileHover={{ rotate: 10 }}
              >
                💬
              </motion.div>
              <div>
                <h4 className="font-semibold text-[#4a4a4a] group-hover:text-[#FADADD] transition-colors">
                  WhatsApp
                </h4>
                <p className="text-gray-600 text-sm">[+62 123 4567 8900]</p>
                <p className="text-gray-600 text-xs mt-1">Let's chat on WhatsApp</p>
              </div>
            </motion.a>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-[#4a4a4a] mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FADADD] to-[#FFC0CB] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>in</span>
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D2B48C] to-[#C4A484] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>@</span>
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FADADD] to-[#D2B48C] flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>𝕏</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="card-soft p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#4a4a4a] mb-2"
                >
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#FADADD] focus:border-[#D2B48C] outline-none transition-colors bg-[#FFF9F7]"
                  placeholder="Your name"
                  whileFocus={{ scale: 1.01 }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#4a4a4a] mb-2"
                >
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#FADADD] focus:border-[#D2B48C] outline-none transition-colors bg-[#FFF9F7]"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.01 }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#4a4a4a] mb-2"
                >
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#FADADD] focus:border-[#D2B48C] outline-none transition-colors bg-[#FFF9F7]"
                  placeholder="What's this about?"
                  whileFocus={{ scale: 1.01 }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#4a4a4a] mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#FADADD] focus:border-[#D2B48C] outline-none transition-colors bg-[#FFF9F7] resize-none"
                  rows={5}
                  placeholder="Your message..."
                  whileFocus={{ scale: 1.01 }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-pink"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
