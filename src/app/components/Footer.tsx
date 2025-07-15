'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="w-full px-6 md:px-20 py-20 mt-16 font-inria bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
            {/* Top Section */}
            <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center gap-6">
                {/* Tagline */}
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-amber-600  dark:text-sky-400">
                    UPSKILL FOR A BETTER FUTURE
                </p>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100">
                    Request More Information
                </h2>

                {/* Description */}
                <p className="max-w-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    High Achievers Coach International Academy is an International High School based in Borrowdale,
                    Harare, Zimbabwe. We teach children from all over the world skills that will be valuable to
                    them in the future.
                </p>

                {/* Contact Button */}
                <Link
                    href={`/${process.env.NEXT_PUBLIC_BASE_PATH}/contact`}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full shadow-md font-semibold transition-colors dark:bg-sky-500 dark:hover:bg-sky-600"
                >
                    Contact Us
                </Link>
            </div>

            <hr className="my-16 border-slate-200 dark:border-slate-800"/>

            {/* Bottom Section */}
            <div
                className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-center text-center text-sm md:text-base">
                {/* Logo */}
                <div className="flex justify-center">
                    <Image
                        src="/media/hac_logo.svg"
                        alt="HACIA Logo"
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain "
                    />
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Link
                        href={`/about`}
                        className="text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 transition-colors"
                    >
                        ABOUT US
                    </Link>
                    <Link
                        href="../holiday"
                        className="text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 transition-colors"
                    >
                        HOLDAY PROGRAM
                    </Link>
                </div>

                {/* Copyright */}
                <p className="text-slate-500 dark:text-slate-400">
                    © 2025 HACEC PVT LTD
                </p>
            </div>
        </footer>
    );
}