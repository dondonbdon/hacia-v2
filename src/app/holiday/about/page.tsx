'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {ArrowRight, CheckCircle, MapPinnedIcon, ShieldIcon} from 'lucide-react';
import React from "react";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0, transition: {duration: 0.6}}
};
export default function HolidayAboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
            <Navbar/>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Parallax */}
                    <motion.div
                        initial={{scale: 1.1}}
                        animate={{scale: 1}}
                        transition={{duration: 1.5}}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/media/hacia-building.jpg"
                            alt="Revision Camp Students"
                            fill
                            className="object-cover blur-2xl"
                            priority
                        />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70">

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"/>

                        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 max-w-7xl mx-auto">
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold text-white mb-4"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6}}
                            >
                                Cambridge I Believe I Can Succeed<br/>Revision & Remedial Camps
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-2xl text-white/90 max-w-3xl"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.1}}
                            >

                            </motion.p>
                        </div>
                    </div>

                    {/* Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {opacity: 0},
                            visible: {
                                opacity: 1,
                                transition: {staggerChildren: 0.2}
                            }
                        }}
                        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
                    >
                        <motion.h1
                            variants={item}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                        >
                            Cambridge I Believe I Can Succeed
                        </motion.h1>

                        <motion.p
                            variants={item}
                            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                        >
                            Revision and Remedial Camps for November 2025, June 2026, and November 2026 sessions
                        </motion.p>

                        <motion.div variants={item}>
                            <button
                                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-full shadow-lg transition-colors duration-300">
                                Register Now
                            </button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Introduction Section */}
                <section className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-950">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-100px"}}
                        variants={container}
                        className="max-w-5xl mx-auto"
                    >
                        <motion.div variants={item} className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Unparalleled Excellence in Revision and Remedial Tutoring
                            </h2>
                            <div className="w-24 h-1 bg-amber-500 dark:bg-cyan-400 mx-auto"></div>
                        </motion.div>

                        <motion.p variants={item} className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                            As Zimbabwe&#39;s flagship revision academy, HAC consistently delivers outstanding results,
                            catering to diverse learners worldwide. Our expertise and commitment to examination success
                            have earned us a reputation for excellence.
                        </motion.p>

                        <motion.div variants={item} className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold mb-4 text-amber-600 dark:text-cyan-400">
                                    Upcoming Sessions
                                </h3>
                                <ul className="space-y-3">
                                    {['November 2025', 'June 2026', 'November 2026'].map((session, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle
                                                className="text-amber-500 dark:text-cyan-400 mt-1 mr-2 flex-shrink-0"/>
                                            <span>{session} Examination Preparation</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold mb-4 text-amber-600 dark:text-cyan-400">
                                    Program Highlights
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        'Personalized learning plans',
                                        'Expert Cambridge tutors',
                                        'Proven revision strategies',
                                        'Comprehensive subject coverage'
                                    ].map((highlight, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle
                                                className="text-amber-500 dark:text-cyan-400 mt-1 mr-2 flex-shrink-0"/>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Blastmaster Strategy Section */}
                <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-100px"}}
                        variants={container}
                        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
                    >
                        <motion.div variants={item}>
                            <Image
                                src="/media/sports-day.jpg"
                                alt="Blastmaster Strategy"
                                width={600}
                                height={700}
                                className="rounded-xl shadow-lg "
                            />
                        </motion.div>

                        <motion.div variants={item} className="space-y-6">
                            <div
                                className="flex items-center gap-3 text-amber-600 dark:text-cyan-400 uppercase tracking-widest text-sm font-bold">
                                <CheckCircle className="w-5 h-5"/>
                                <span>Our Unique Approach</span>
                            </div>

                            <h2 className="text-3xl font-bold">
                                The Blastmaster Strategy
                            </h2>

                            <p className="text-gray-700 dark:text-gray-300">
                                Our unique approach identifies and tackles challenges head-on, ensuring learners
                                overcome obstacles and reach their full potential. Through targeted interventions and
                                proven methodologies, we transform academic weaknesses into strengths.
                            </p>

                            <ul className="space-y-3">
                                {[
                                    'Diagnostic assessments',
                                    'Customized learning paths',
                                    'Exam technique mastery',
                                    'Confidence building'
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle
                                            className="text-amber-500 dark:text-cyan-400 mt-1 mr-2 flex-shrink-0"/>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Location & Authenticity Section */}
                <section className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-950">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true, margin: "-100px"}}
                        variants={container}
                        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12"
                    >
                        <motion.div variants={item} className="space-y-6">
                            <h2 className="text-3xl font-bold">
                                Join Us At Our Premier Location
                            </h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-2 bg-amber-100 dark:bg-cyan-900 rounded-full">
                                        <MapPinnedIcon className="text-amber-600 dark:text-cyan-400 w-5 h-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">High Achievers Coach Educational Centre</h3>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            801 Helvetia Drive, Borrowdale<br/>
                                            Harare, Zimbabwe
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="mt-1 p-2 bg-amber-100 dark:bg-cyan-900 rounded-full">
                                        <ShieldIcon className="text-amber-600 dark:text-cyan-400 w-5 h-5"/>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Authenticity Matters</h3>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            Beware of copycats – HAC is the original and trusted brand. Choose the best
                                            for your child&#39;s future.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={item}>
                            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm h-full">
                                <h3 className="text-2xl font-semibold mb-6 text-amber-600 dark:text-cyan-400">
                                    Secure Your Spot Today
                                </h3>

                                <p className="text-gray-700 dark:text-gray-300 mb-6">
                                    Limited spaces available for each session. Register now and empower your child with
                                    the confidence and skills to succeed in their Cambridge examinations.
                                </p>

                                <a href='/holiday'>
                                    <button
                                        className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow transition-colors duration-300 dark:bg-cyan-600 dark:hover:bg-cyan-700"
                                    >
                                        Enroll Now <ArrowRight className="inline ml-2"/>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            <Footer/>
        </div>
    );
}