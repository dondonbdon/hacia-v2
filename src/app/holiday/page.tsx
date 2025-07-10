'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { v4 as uuidv4 } from 'uuid';

export default function HolidayProgramPage() {
    const [students, setStudents] = useState([{ id: uuidv4(), name: '', age: '', grade: '', type: '' }]);

    const handleAddStudent = () => {
        setStudents((prev) => [
            ...prev,
            { id: uuidv4(), name: '', age: '', grade: '', type: '' },
        ]);
    };

    const handleRemoveStudent = (id: string) => {
        setStudents((prev) => prev.filter((student) => student.id !== id));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        try {
            const response = await fetch('/api/holiday-signup', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                alert('Registration submitted successfully! We will contact you shortly.');
                (e.target as HTMLFormElement).reset();
            } else {
                throw new Error('Submission failed');
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            alert('There was an error submitting your form. Please try again or call us.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar/>
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
                <Image
                    src="/media/travel-tourism-team-2025.jpg"
                    alt="Students enjoying holiday program activities"
                    fill
                    className="object-cover"
                    priority
                />
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
                        August 15 - September 4, 2025 | Borrowdale, Harare
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Program Highlights */}
                <section className="mb-20">
                    <motion.div
                        className="grid md:grid-cols-2 gap-12 items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}>
                        <div className="flex flex-col gap-x-4">
                            <div>
                                <motion.h2
                                    className="text-3xl font-bold text-amber-600 dark:text-cyan-400 mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    Accelerated Learning During Holidays
                                </motion.h2>
                                <motion.div
                                    className="space-y-4 text-slate-700 dark:text-slate-300"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ staggerChildren: 0.1, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.p
                                        className="flex items-start gap-3"
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <span className="text-amber-500 dark:text-cyan-400 mt-1">✓</span>
                                        <span><strong>2-week intensive sessions</strong> -  2-week long session starting August 15</span>
                                    </motion.p>
                                    <motion.p
                                        className="flex items-start gap-3"
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <span className="text-amber-500 dark:text-cyan-400 mt-1">✓</span>
                                        <span><strong>All ages welcome</strong> - Primary School to High School (Grade 1 to A-Level)</span>
                                    </motion.p>
                                    <motion.p
                                        className="flex items-start gap-3"
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <span className="text-amber-500 dark:text-cyan-400 mt-1">✓</span>
                                        <span><strong>All exam boards</strong> - Cambridge, ZIMSEC, and other curricula supported</span>
                                    </motion.p>
                                    <motion.p
                                        className="flex items-start gap-3"
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <span className="text-amber-500 dark:text-cyan-400 mt-1">✓</span>
                                        <span><strong>Flexible pricing</strong> - $300 for internal students & $400 for external students </span>
                                    </motion.p>
                                </motion.div>
                            </div>

                            <Link className='bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full shadow-md font-semibold transition-colors dark:bg-sky-700 dark:hover:bg-sky-800 mt-10 w-75'
                                href='/holiday/about'>
                                Find out more about our camps
                            </Link>
                        </div>
                        <motion.div
                            className="rounded-xl overflow-hidden shadow-xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="/media/students_dr.jpg"
                                alt="Students learning in classroom"
                                width={800}
                                height={600}
                                className="w-full h-auto max-h-100 object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </section>

                {/* Registration Form */}
                <section id='register' className="mb-20">
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            {/* Form */}
                            <div className="p-8 md:p-12">
                                <motion.h2
                                    className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                >

                                </motion.h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="parentName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                            Parent/Guardian Name
                                        </label>
                                        <input
                                            type="text"
                                            id="parentName"
                                            name="parentName"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700"
                                        />
                                    </motion.div>

                                    {/* Students Section */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        className="space-y-4"
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                Student Information
                                            </h3>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleAddStudent()
                                                }
                                                className="text-sm text-amber-600 dark:text-cyan-500 hover:underline"
                                            >
                                                + Add Another Student
                                            </button>
                                        </div>

                                        {/* Student 1 */}
                                        {students.map((student, index) => (
                                            <div
                                                key={index}
                                                className="bg-slate-100 dark:bg-slate-800 rounded-lg space-y-4 relative"
                                            >
                                                {/* Remove Button */}
                                                {students.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveStudent(student.id)}
                                                        className="absolute  right-2 text-sm  text-red-500 hover:underline"
                                                    >
                                                        Remove
                                                    </button>
                                                )}

                                                {/* Name Field */}
                                                <div>
                                                    <label htmlFor={`studentName${student.id}`} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                                        Student Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id={`studentName${student.id}`}
                                                        name={`studentName${student.id}`}
                                                        required
                                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700"
                                                    />
                                                </div>

                                                {/* Age and Grade */}
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label htmlFor={`studentAge${student.id}`} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                                            Age
                                                        </label>
                                                        <input
                                                            type="number"
                                                            id={`studentAge${student.id}`}
                                                            name={`studentAge${student.id}`}
                                                            required
                                                            min="5"
                                                            max="18"
                                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor={`studentGrade${student.id}`} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                                            Level
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id={`studentGrade${student.id}`}
                                                            name={`studentGrade${student.id}`}
                                                            required
                                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Student Type */}
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                                        Student Type
                                                    </label>
                                                    <div className="flex space-x-4">
                                                        <label className="inline-flex items-center">
                                                            <input
                                                                type="radio"
                                                                name={`studentType${student.id}`}
                                                                value="internal"
                                                                required
                                                                className="text-amber-600 dark:text-cyan-500 focus:ring-amber-500 dark:focus:ring-cyan-400"
                                                            />
                                                            <span className="ml-2">Internal Student</span>
                                                        </label>
                                                        <label className="inline-flex items-center">
                                                            <input
                                                                type="radio"
                                                                name={`studentType${student.id}`}
                                                                value="external"
                                                                className="text-amber-600 dark:text-cyan-500 focus:ring-amber-500 dark:focus:ring-cyan-400"
                                                            />
                                                            <span className="ml-2">External Student</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}



                                        {/* Additional students would be added here dynamically */}
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="session" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                            Preferred Session
                                        </label>
                                        <select
                                            id="session"
                                            name="session"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700"
                                        >
                                            <option value="">Select a session</option>
                                            <option value="Aug15-Sep4">August 15 - Sep 04</option>
                                        </select>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <button
                                            type="submit"
                                            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 dark:bg-cyan-600 dark:hover:bg-cyan-700"
                                        >
                                            Register Now
                                        </button>
                                    </motion.div>
                                </form>
                            </div>

                            {/* Side Info */}
                            <div className="bg-amber-50 dark:bg-cyan-950/30 p-8 md:p-12 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-2xl font-bold text-amber-700 dark:text-cyan-400">
                                        Program Details
                                    </h3>
                                    <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 dark:text-cyan-400 mt-1">•</span>
                                            <span><strong>Location:</strong> HACIA Campus, Borrowdale, Harare</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 dark:text-cyan-400 mt-1">•</span>
                                            <span><strong>Hours:</strong> 8:30 AM - 1:00 PM daily (Mon-Sat)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 dark:text-cyan-400 mt-1">•</span>
                                            <span><strong>Subjects:</strong> All core CAIE/ZIMSEC subjects + exam prep</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 dark:text-cyan-400 mt-1">•</span>
                                            <span><strong>Bring:</strong> Notebooks, pens, and any current textbooks</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 dark:text-cyan-400 mt-1">•</span>
                                            <span><strong>Uniform:</strong> Casual, respectful clothing</span>
                                        </li>
                                    </ul>

                                    <div className="pt-4 border-t border-amber-200 dark:border-cyan-800">
                                        <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">
                                            Need Help?
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                                            Call us at <a href="tel:+263242882304" className="text-amber-600 dark:text-cyan-400 hover:underline">+263 242 882 304</a> or visit our <Link href="/contact" className="text-amber-600 dark:text-cyan-400 hover:underline">contact page</Link> for more information.
                                        </p>
                                        <Link
                                            href="/contact/#map"
                                            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors dark:text-cyan-400 dark:hover:text-cyan-500"
                                        >
                                            View Campus Location
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-r from-amber-500 to-amber-600 dark:from-cyan-600 dark:to-cyan-700 rounded-xl p-8 md:p-12 text-white">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Limited Spaces Available
                        </h2>
                        <p className="text-lg mb-6 max-w-2xl mx-auto">
                            Our holiday program fills up quickly. Secure your child&#39;s spot today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/holiday/#register"
                                className="bg-white text-amber-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-medium transition-colors"
                            >
                                Register Now
                            </Link>
                            <a
                                href="tel:+263242882304"
                                className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors"
                            >
                                Call Us: +263 242 882 304
                            </a>
                        </div>
                    </motion.div>
                </section>
            </div>

            <Footer />
        </div>
    );
}