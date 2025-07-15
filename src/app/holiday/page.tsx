'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { v4 as uuidv4 } from 'uuid';
import {FaWhatsapp} from "react-icons/fa";
import {ImFacebook, ImWhatsapp} from "react-icons/im";

export default function HolidayProgramPage() {
    const [students, setStudents] = useState([{ id: uuidv4(), name: '', age: '', grade: '', type: '' }]);
    type SubmissionState = 'initial' | 'submitting' | 'submitted' | 'error';
    const [submissionState, setSubmissionState] = useState<SubmissionState>('initial');
    const [error, setError] = useState<string | null>(null);

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
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        if (submissionState === 'submitting') return;
        setSubmissionState('submitting');
        setError(null);

        try {
            const studentsData = students.map((student) => {
                const name = formData.get(`studentName${student.id}`) as string;
                const ageStr = formData.get(`studentAge${student.id}`) as string;
                const grade = formData.get(`studentGrade${student.id}`) as string;
                const type = formData.get(`studentType${student.id}`) as string;

                return {
                    name,
                    age: parseInt(ageStr, 10),
                    level: grade,
                    type: type?.toUpperCase(),
                };
            });

            const payload = {
                name: formData.get('parentName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                students: studentsData,
                session: formData.get('session'),
            };

            const response = await fetch('https://hacia-v2-backend.fly.dev/api/v1/holiday-students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                setSubmissionState('error');
            }

            setSubmissionState('submitted');
            form.reset();
            setStudents([{ id: uuidv4(), name: '', age: '', grade: '', type: '' }]);

        } catch (err: unknown) {
            setSubmissionState('error');
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar/>
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
                <Image
                    src="/media/old-side.jpg"
                    alt="Students enjoying holiday program activities"
                    fill
                    className="object-cover blur-lg"
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
                    <div className='flex'>
                        <motion.p
                            className="text-xl md:text-2xl text-white/90 max-w-3xl"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.1}}
                        >
                            August 15 - August 30, 2025 | Borrowdale, Harare
                        </motion.p>
                    </div>

                    <div className='flex gap-1.5'>
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            href="https://wa.me/263774717308"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center justify-center w-12 mt-5 h-12 bg-green-500 hover:bg-green-600 rounded-full transition-colors shadow-lg">
                            <ImWhatsapp className="w-6 h-6 text-white" />
                        </motion.a>

                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            href="https://wa.me/263772727117"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 mt-5 h-12 bg-green-500 hover:bg-green-600 rounded-full transition-colors shadow-lg"
                            whileHover={{ scale: 1.05 }}>
                            <ImWhatsapp className="w-6 h-6 text-white" />
                        </motion.a>

                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            href="https://www.facebook.com/profile.php?id=100054546486266#"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center justify-center w-12 mt-5 h-12 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors shadow-lg"
                        >
                            <ImFacebook className="w-6 h-6 text-white" />
                        </motion.a>
                    </div>


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
                                        <span><strong>2-week interactive lessons</strong> -  2-week long session starting August 15</span>
                                    </motion.p>
                                    <motion.p
                                        className="flex items-start gap-3"
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <span className="text-amber-500 dark:text-cyan-400 mt-1">✓</span>
                                        <span><strong>All ages welcome</strong> - Tailor made Primary and High School programs</span>
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
                                src="/media/first-block.jpg"
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
                                    Register for Holiday Program
                                </motion.h2>

                                {/* Submission status message */}
                                <div className={`mb-6 p-4 rounded-lg ${
                                    submissionState === 'submitting'
                                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'
                                        : submissionState === 'submitted'
                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                            : submissionState === 'error'
                                                ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                                                : 'hidden'
                                }`}>
                                    {submissionState === 'error'
                                        ? error || 'Failed to submit. Please try again.'
                                        : submissionState === 'submitting'
                                            ? 'Submitting your registration...'
                                            : submissionState === 'submitted'
                                                ? 'Registration submitted successfully! We will contact you shortly.'
                                                : ''}
                                </div>

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
                                            disabled={submissionState === 'submitting'}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700 disabled:opacity-70"
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
                                            disabled={submissionState === 'submitting'}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700 disabled:opacity-70"
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
                                            disabled={submissionState === 'submitting'}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700 disabled:opacity-70"
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
                                                onClick={handleAddStudent}
                                                disabled={submissionState === 'submitting'}
                                                className="text-sm text-amber-600 dark:text-cyan-500 hover:underline disabled:opacity-50"
                                            >
                                                + Add Another Student
                                            </button>
                                        </div>

                                        {/* Student 1 */}
                                        {students.map((student) => (
                                            <div
                                                key={student.id}
                                                className="bg-slate-100 dark:bg-slate-800 rounded-lg space-y-4 relative"
                                            >
                                                {/* Remove Button */}
                                                {students.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveStudent(student.id)}
                                                        disabled={submissionState === 'submitting'}
                                                        className="absolute top-2 right-2 text-sm text-red-500 hover:underline disabled:opacity-50"
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
                                                        disabled={submissionState === 'submitting'}
                                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700 disabled:opacity-70"
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
                                                            disabled={submissionState === 'submitting'}
                                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700 disabled:opacity-70"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor={`studentGrade${student.id}`} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                                            Level
                                                        </label>
                                                        <select
                                                            id={`studentGrade${student.id}`}
                                                            name={`studentGrade${student.id}`}
                                                            required
                                                            disabled={submissionState === 'submitting'}
                                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700 disabled:opacity-70"
                                                        >
                                                            <option value="">Select a level</option>
                                                            <option value="G1">Grade 1</option>
                                                            <option value="G2">Grade 2</option>
                                                            <option value="G3">Grade 3</option>
                                                            <option value="G4">Grade 4</option>
                                                            <option value="G5">Grade 5</option>
                                                            <option value="G6">Grade 6</option>
                                                            <option value="G7">Grade 7</option>
                                                            <option value="F1">Form 1</option>
                                                            <option value="F1">Form 2</option>
                                                            <option value="F3">Form 3</option>
                                                            <option value="F4">Form 4</option>
                                                            <option value="L6">Lower 6</option>
                                                            <option value="U6">Upper 6</option>
                                                        </select>
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
                                                                disabled={submissionState === 'submitting'}
                                                                className="text-amber-600 dark:text-cyan-500 focus:ring-amber-500 dark:focus:ring-cyan-400 disabled:opacity-70"
                                                            />
                                                            <span className="ml-2">Internal Student</span>
                                                        </label>
                                                        <label className="inline-flex items-center">
                                                            <input
                                                                type="radio"
                                                                name={`studentType${student.id}`}
                                                                value="external"
                                                                disabled={submissionState === 'submitting'}
                                                                className="text-amber-600 dark:text-cyan-500 focus:ring-amber-500 dark:focus:ring-cyan-400 disabled:opacity-70"
                                                            />
                                                            <span className="ml-2">External Student</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

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
                                            disabled={submissionState === 'submitting'}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent dark:bg-slate-700 disabled:opacity-70"
                                        >
                                            <option value="">Select a session</option>
                                            <option value="August-Holiday">August 15 - August 30</option>
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
                                            disabled={submissionState === 'submitting'}
                                            className={`w-full text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 ${
                                                submissionState === 'submitting'
                                                    ? 'bg-amber-700 dark:bg-cyan-700 cursor-not-allowed'
                                                    : 'bg-amber-600 hover:bg-amber-700 dark:bg-cyan-600 dark:hover:bg-cyan-700'
                                            }`}
                                        >
                                            {submissionState === 'submitting' ? 'Submitting...' : 'Register Now'}
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
                                            <span><strong>Subjects:</strong> Blast Master Tasks & Exercise Books</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 dark:text-cyan-400 mt-1">•</span>
                                            <span><strong>Dress Code:</strong> Casual</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-amber-600 dark:text-cyan-400 mt-1">•</span>
                                            <span><strong>Transport Available:</strong> At a given fee, to and from the following destinations - City Centre, Marlborough, Mt Pleasant, Westgate, Civics Centre</span>
                                        </li>
                                    </ul>

                                    <div className="pt-4 border-t border-amber-200 dark:border-cyan-800">
                                        <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">
                                            Need Help?
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                                            Call/Whatsapp us at <a href="tel:+263242882304" className="text-amber-600 dark:text-cyan-400 hover:underline">+263 242 882 304</a> / <a href="tel:+263774717308" className="text-amber-600 dark:text-cyan-400 hover:underline">+263 774 717 308</a> or visit our <Link href="/contact" className="text-amber-600 dark:text-cyan-400 hover:underline">contact page</Link> for more information.
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
                            Enrolment in Progress
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
                                href="https://wa.me/263772727117"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                                <FaWhatsapp className="w-5 h-5" />
                                Chat on WhatsApp
                            </a>
                            <a
                                href="https://wa.me/263774717308"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                                <FaWhatsapp className="w-5 h-5" />
                                Chat on WhatsApp
                            </a>

                        </div>
                    </motion.div>
                </section>
            </div>

            <Footer />
        </div>
    );
}