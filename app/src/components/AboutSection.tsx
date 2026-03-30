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
                <motion.div variants={itemVariants} className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-[#4a4a4a]">About </span>
                        <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#FADADD] to-[#D2B48C] rounded-full mx-auto" />
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="max-w-3xl mx-auto text-center"
                >
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        Hello! I am Amelia Putri Ailsa, and called as Amel. I am fresh graduate with
                        a Bachelor's Degree in Information Systems from Gunadarma University. I
                        specialize in data analysis and data management.
                        .
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                        During my role as a Laboratory Operational Assistant at iLAB Gunadarma, I managed largescale student data, ensured smooth laboratory operations, and conducted
                        data analysis to support academic progress. I am proficient in Oracle, SQL
                        Database, and have experience with Python for data analysis.
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        I am eager to grow in the fields of Data Analysis, UI/UX Design, and Product Management,
                        contributing to impactful and user-centered digital solutions.
                    </p>

                    <motion.div
                        variants={itemVariants}
                        className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        <div className="card-soft p-5 text-center">
                            <p className="text-3xl font-bold gradient-text">10+</p>
                            <p className="text-gray-600">Projects Completed</p>
                        </div>
                        <div className="card-soft p-5 text-center">
                            <p className="text-3xl font-bold gradient-text">5+</p>
                            <p className="text-gray-600">Years of Experience</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
