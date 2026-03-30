"use client";

import { motion } from "framer-motion";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export default function CertificationSection() {
  const certificationsData: Certification[] = [
    {
      name: "[Certification Name 1]",
      issuer: "[Issuing Organization]",
      year: "2024",
      credentialId: "[Credential ID/URL]",
    },
    {
      name: "[Certification Name 2]",
      issuer: "[Issuing Organization]",
      year: "2024",
      credentialId: "[Credential ID/URL]",
    },
    {
      name: "[Certification Name 3]",
      issuer: "[Issuing Organization]",
      year: "2023",
      credentialId: "[Credential ID/URL]",
    },
    {
      name: "[Certification Name 4]",
      issuer: "[Issuing Organization]",
      year: "2023",
      credentialId: "[Credential ID/URL]",
    },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certificates" className="py-20 md:py-32 bg-white">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#4a4a4a]">Certifications & </span>
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FADADD] to-[#D2B48C] rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="card-soft p-6 h-full"
                whileHover={{
                  boxShadow:
                    "0 10px 25px -5px rgba(250, 218, 221, 0.2)",
                }}
              >
                <div className="flex gap-4">
                  {/* Certificate Icon */}
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FADADD] to-[#D2B48C] flex items-center justify-center text-white text-xl"
                    whileHover={{ rotate: 10 }}
                  >
                    🏆
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#4a4a4a] mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-[#D2B48C] font-medium text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 text-sm">{cert.year}</p>

                    {cert.credentialId && (
                      <motion.a
                        href={cert.credentialId.startsWith("http") ? cert.credentialId : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-[#FADADD] text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                        whileHover={{ x: 2 }}
                      >
                        View Credential →
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
