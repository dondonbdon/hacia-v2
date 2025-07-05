'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";

export default function Page() {
    // Key dates data
    const keyDates = [
        { id: 1, title: "Term 1 Begins", date: "January 15, 2025", highlight: true },
        { id: 2, title: "Half Term Break", date: "March 3-14, 2025" },
        { id: 3, title: "Internal Exams", date: "April 7-18, 2025" },
        { id: 4, title: "Term 1 Ends", date: "April 25, 2025" },
        { id: 5, title: "Holiday School", date: "July 1 - August 15, 2025", highlight: true },
        { id: 6, title: "IGCSE Exams", date: "May 5-30, 2025" },
        { id: 7, title: "A-Level Exams", date: "May 5 - June 13, 2025" }
    ];

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Hero Section */}
            <motion.section className="relative w-full h-screen overflow-hidden">
                <motion.section
                    className="absolute inset-0 w-full h-full z-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.2, 0.6, 0.3, 0.9] }}
                >
                    <Image
                        src="/media/img_3.png"
                        alt="Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                        className="z-0"
                    />
                    <motion.div
                        className="absolute inset-0 bg-black/50 z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </motion.section>

                {/* Hero Text Centered with Staggered Animations */}
                <motion.div
                    className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 text-white max-w-6xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.5
                            }
                        }
                    }}
                >
                    {/* Top Badge with Globe */}
                    <motion.div
                        className="flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-sm w-fit mb-6 bg-black/20"
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 100
                                }
                            }
                        }}
                    >
                        <motion.div
                            className="rounded-full p-1"
                            animate={{
                                rotate: [0, 15, -15, 0],
                            }}
                            transition={{
                                delay: 1,
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 3
                            }}
                        >
                            <Image
                                src="/media/ic_globe.svg"
                                alt="Globe Icon"
                                width={24}
                                height={24}
                                className="filter brightness-0 invert sepia-100 saturate-500 hue-rotate-180"
                            />
                        </motion.div>
                        <p className="text-sm md:text-base font-medium text-white">
                            Global Learning, Local Excellence
                        </p>
                    </motion.div>

                    {/* Main Hero Heading */}
                    <motion.div className="mb-6" variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}>
                        <motion.p
                            className="text-7xl sm:text-8xl lg:text-9xl font-extrabold"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                        >
                            <motion.span
                                className="text-yellow-300"
                                animate={{
                                    textShadow: ["0 0 8px rgba(253, 224, 71, 0)", "0 0 8px rgba(253, 224, 71, 0.8)", "0 0 8px rgba(253, 224, 71, 0)"]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                }}
                            >
                                Success
                            </motion.span> Is Just
                        </motion.p>
                        <motion.p
                            className="text-7xl sm:text-8xl lg:text-9xl font-extrabold"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "backOut" }}
                        >
                            An <motion.span
                            className="text-yellow-300"
                            animate={{
                                textShadow: ["0 0 8px rgba(253, 224, 71, 0)", "0 0 8px rgba(253, 224, 71, 0.8)", "0 0 8px rgba(253, 224, 71, 0)"]
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                repeat: Infinity,
                                repeatDelay: 3
                            }}
                        >
                            Attitude
                        </motion.span>
                        </motion.p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="text-base md:text-lg font-medium mb-8 max-w-full sm:max-w-xl"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        At High Achievers Coach International Academy (HACIA), we believe in polishing the diamond
                        within each and every student that passes through. We prepare them for the harsh realities
                        of life through life long learning.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1, delay: 0.6 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/contact"
                                className="bg-cyan-500/50 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition flex items-center gap-2 justify-center">
                                Get In Touch
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 rotate-[45deg]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    animate={{
                                        x: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity
                                    }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l5-5 5 5" />
                                </motion.svg>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button className="bg-teal-600/50 text-white backdrop-blur-md px-6 py-3 rounded-full font-semibold transition flex items-center gap-2 justify-center">
                                Holiday Program
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 rotate-[45deg]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    animate={{
                                        x: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: 0.3
                                    }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l5-5 5 5" />
                                </motion.svg>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Optional Statistics */}
                    <motion.div
                        className="flex gap-10 text-sm md:text-base font-medium text-white/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="text-2xl font-bold text-white">+700</p>
                            <p>Students Enrolled 2025</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                        >
                            <p className="text-2xl font-bold text-white">Cambridge CAIE</p>
                            <p>International Curriculum</p>
                        </motion.div>
                    </motion.div>

                    {/* Animated Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                        animate={{
                            y: [0, 15, 0],
                            opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-8 h-8 text-yellow-300"
                        >
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Holiday Program Section */}
            <section className="py-20 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-slate-800 dark:to-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="md:w-1/2">
                            <motion.h2
                                className="text-3xl font-bold text-amber-700 dark:text-amber-400 mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                July-August Holiday School Program
                            </motion.h2>
                            <motion.p
                                className="text-lg text-slate-700 dark:text-slate-300 mb-6"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                Our intensive holiday program helps students get ahead or catch up on key subjects.
                                Featuring Cambridge-trained teachers and personalized learning plans.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href="../holiday"
                                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors dark:bg-amber-500 dark:hover:bg-amber-600"
                                >
                                    Learn More About Our Program
                                </Link>
                            </motion.div>
                        </div>
                        <motion.div
                            className="md:w-1/2 relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/media/students_dr.jpg"
                                alt="Students in holiday program"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Dates Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Key Academic Dates 2025
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {keyDates.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={`p-6 rounded-lg border ${item.highlight ? 'border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700' : 'border-slate-200 dark:border-slate-700'}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={`text-lg font-semibold ${item.highlight ? 'text-amber-700 dark:text-amber-400' : 'text-slate-700 dark:text-slate-300'}`}>
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mt-2">
                                    {item.date}
                                </p>
                                {item.highlight && (
                                    <div className="mt-3">
                                        <span className="inline-block px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full dark:bg-amber-900/50 dark:text-amber-200">
                                            Important Date
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Teaser */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h2
                        className="text-3xl font-bold mb-6 text-slate-800 dark:text-slate-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        School Events and Activities Gallery
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Coming soon - Join in the fun by looking at pictures from different events from our school
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative h-64 md:h-96 w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-medium text-slate-500 dark:text-slate-400">
                                Gallery Coming Soon
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick About Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <motion.div
                            className="md:w-1/2 relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/media/hacia-building.jpg"
                                alt="HACIA campus"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="md:w-1/2">
                            <motion.h2
                                className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                About High Achievers
                            </motion.h2>
                            <motion.p
                                className="text-lg text-slate-600 dark:text-slate-300 mb-6"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                Founded in 1998, HACIA has grown from a small coaching program to a leading
                                international academy offering Cambridge curriculum to students from Form 1
                                through A-Levels.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href="/about"
                                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors dark:text-cyan-400 dark:hover:text-cyan-500"
                                >
                                    Learn more about our history and values
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-cyan-600 dark:to-cyan-800 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Ready to Join the HACIA Family?
                    </motion.h2>
                    <motion.p
                        className="text-lg mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Have a chat with us, and find out if we are the right fit for you and your children.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/contact"
                            className="bg-white text-amber-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-medium transition-colors dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                        >
                            Contact Us
                        </Link>

                    </motion.div>
                </div>
            </section>
        </div>
    );
}