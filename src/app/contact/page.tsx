'use client';

import { useState } from 'react';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { motion } from 'framer-motion';

import {
	MailIcon,
	MapPinIcon,
	PhoneIcon,
} from 'lucide-react';
import Image from "next/image";

export default function Page() {

	const [submissionState, setSubmissionState] = useState<'initial' | 'submitting' | 'submitted'>('initial');
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		contents: '',
	});

	// Simple validation
	const isValidEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

	const isFormValid =
		formData.name.trim() !== '' &&
		isValidEmail(formData.email) &&
		formData.contents.trim() !== '';

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid || submissionState === 'submitting') return;
        setSubmissionState('submitting');

        try {
            const response = await fetch('https://hacia-v2-backend.fly.dev/api/v1/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to submit');

            setSubmissionState('submitted');

        } catch (err) {
            console.error(err);
            alert('There was an error submitting the form.');
            setSubmissionState(`failed to send mail because ${err.message}`);
        }
    };


    return (
		<div>
			<Navbar />
			<main>
				<div className='min-h-screen bg-white  text-black dark:bg-gray-950 dark:text-white transition-colors duration-300'>
					{/* Hero Section */}

                        {/* Enhanced Hero Section */}
                        <section className='w-full relative overflow-hidden' style={{ height: '66vh' }}>
                            {/* Background Image with Parallax Effect */}
                            <motion.div
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className='absolute inset-0'
                            >
                                <Image
                                    src='/media/blessing-og.jpg'
                                    alt='Hero Background'
                                    fill
                                    className='object-cover w-full h-full'
                                    priority
                                />
                            </motion.div>

                            {/* Gradient Overlay with Depth */}
                            <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80'></div>

                            {/* Subtle Pattern Overlay */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23ffffff' fill-opacity='0.4'><path d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/></g></g></svg>")`,
                                    backgroundRepeat: 'repeat'
                                }}
                            ></div>

                    {/* Content with Staggered Animation */}
                    <div className='absolute inset-0 flex items-center justify-center text-center px-6'>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2
                                    }
                                }
                            }}
                            className='max-w-4xl mx-auto'
                        >
                            <motion.h1
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.8, ease: "easeOut" }
                                    }
                                }}
                                className='text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white mb-6 leading-tight'
                            >
                                Send Us An Email
                            </motion.h1>

                            <motion.p
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
                                    }
                                }}
                                className='text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto'
                            >
                                We&#39;d love to hear from you. Reach out with your questions or inquiries.
                            </motion.p>


                        </motion.div>
                    </div>

                    {/* Scrolling Indicator */}
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut"
                        }}
                        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
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
                            className='w-8 h-8 text-amber-400'
                        >
                            <path d="M12 5v14M19 12l-7 7-7-7"/>
                        </svg>
                    </motion.div>
                </section>


					{/* Main Content */}
					<main className='max-w-10/12 mx-auto px-6 sm:px-12 lg:px-20 py-16 space-y-20'>
                        <div className='flex flex-col justify-center lg:flex-row gap-8 w-full'>
                            <div className='flex-1'>
                                <h1 className='text-6xl font-bold mb-4'>CONTACT US</h1>
                                <p className='text-xl text-gray-600 dark:text-gray-300 mb-8'>
                                    Reach out to us for inquiries, admissions, or any questions you might have.
                                    Our team is ready to assist you with quality education services.
                                </p>

                                {/* Contact Form */}
                                <form
                                    onSubmit={onSubmit}
                                    noValidate
                                    className='w-full px-6 lg:px-8 bg-slate-100 dark:bg-slate-950 rounded-md p-8 flex flex-col'
                                    >

                                    <h1 className='text-2xl pb-6 font-semibold text-amber-600 dark:text-cyan-400'>
                                        GET IN TOUCH
                                    </h1>

                                    <div className='w-full h-0.25 max-h-0.3 bg-amber-500 dark:bg-cyan-400 rounded-md mb-6' />

                                    {/* Submission message */}
                                    <p className={`text-lg pt-2 pb-6 ${
                                        submissionState === 'submitting' ? 'text-amber-600 dark:text-cyan-400' :
                                            submissionState === 'submitted' ? 'text-green-600 dark:text-green-400' :
                                                'text-gray-500'
                                    }`}>
                                        {
                                            {
                                                initial: '',
                                                submitting: 'Submitting your message, please wait...',
                                                submitted: 'Your message has been submitted successfully!',
                                            }[submissionState]
                                        }
                                    </p>

                                    {/* Name and Phone */}
                                    <div className='flex lg:flex-row flex-col mb-4 w-full gap-4'>
                                        <div className='w-full'>
                                            <h3 className='py-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                                NAME
                                            </h3>
                                            <input
                                                id='name'
                                                name='name'
                                                type='text'
                                                placeholder='Enter your name*'
                                                value={formData.name}
                                                onChange={handleChange}
                                                className='w-full border dark:border-slate-700 rounded-md p-3 bg-white dark:bg-slate-900 font-normal focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent'
                                            />
                                        </div>

                                        <div className='w-full'>
                                            <h3 className='py-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                                PHONE
                                            </h3>
                                            <input
                                                id='phone'
                                                name='phone'
                                                type='text'
                                                placeholder='Enter your phone number*'
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className='w-full border dark:border-slate-700 rounded-md p-3 bg-white dark:bg-slate-900 font-normal focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent'
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className='mb-4 w-full'>
                                        <h3 className='py-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                            EMAIL
                                        </h3>
                                        <input
                                            id='email'
                                            name='email'
                                            type='email'
                                            placeholder='Email*'
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full border ${
                                                !isValidEmail(formData.email) && formData.email.trim() !== '' && submissionState !== 'initial'
                                                    ? 'border-red-500 dark:border-red-400'
                                                    : 'dark:border-slate-700'
                                            } rounded-md p-3 bg-white dark:bg-slate-900 font-normal focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent`}
                                        />
                                        {!isValidEmail(formData.email) && formData.email.trim() !== '' && submissionState !== 'initial' && (
                                            <div className='text-red-500 dark:text-red-400 text-sm mt-1'>
                                                A valid email is required
                                            </div>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div className='mb-6 w-full'>
                                        <h3 className='py-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                                            YOUR MESSAGE
                                        </h3>
                                        <textarea
                                            id='contents'
                                            name='contents'
                                            rows={8}
                                            value={formData.contents}
                                            onChange={handleChange}
                                            className={`w-full border ${
                                                formData.contents.trim() === '' && submissionState !== 'initial'
                                                    ? 'border-red-500 dark:border-red-400'
                                                    : 'dark:border-slate-700'
                                            } rounded-md p-3 bg-white dark:bg-slate-900 font-normal focus:ring-2 focus:ring-amber-500 dark:focus:ring-cyan-400 focus:border-transparent`}
                                        />
                                        {formData.contents.trim() === '' && submissionState !== 'initial' && (
                                            <div className='text-red-500 dark:text-red-400 text-sm mt-1'>
                                                Message body is required
                                            </div>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type='submit'
                                        disabled={!isFormValid || submissionState === 'submitting'}
                                        className={`w-full rounded-md p-4 font-medium text-white ${
                                            !isFormValid || submissionState === 'submitting'
                                                ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                                                : 'bg-amber-600 hover:bg-amber-700 dark:bg-cyan-600 dark:hover:bg-cyan-700'
                                        } transition-colors duration-200`}>
                                        {submissionState === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>

                            <div className='flex-1'>
                                <h1 className='text-3xl font-semibold mb-8 '>
                                    Our Contact Information
                                </h1>

                                <div className='w-full h-max rounded-md flex flex-col space-y-6'>
                                    {/* Contact Info Section */}
                                    <div className='w-full px-6 lg:px-8 bg-slate-100 dark:bg-slate-950 rounded-md p-8 flex flex-col space-y-6'>
                                        <h1 className='text-2xl font-semibold text-amber-600 dark:text-cyan-400'>
                                            CONTACT INFORMATION
                                        </h1>
                                        <div className='w-full h-0.25 max-h-0.3 bg-amber-500 dark:bg-cyan-400 rounded-md' />

                                        <div className='flex flex-col lg:flex-row lg:justify-between gap-8'>
                                            {/* Left Side */}
                                            <div className='space-y-6'>
                                                {/* Phone */}
                                                <div className='flex items-start gap-x-4'>
                                                    <PhoneIcon className='text-amber-600 dark:text-cyan-400 w-6 h-6 mt-1' />
                                                    <div className='flex flex-col'>
                                                        <p className='text-xs font-medium text-gray-600 dark:text-gray-400'>
                                                            SCHOOL OFFICE
                                                        </p>
                                                        <p className='text-md font-normal text-gray-700 dark:text-gray-300'>
                                                            +263 242882304
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Email */}
                                                <div className='flex items-start gap-x-4'>
                                                    <MailIcon className='text-amber-600 dark:text-cyan-400 w-6 h-6 mt-1' />
                                                    <div className='flex flex-col'>
                                                        <p className='text-xs font-medium text-gray-600 dark:text-gray-400'>
                                                            EMAIL
                                                        </p>
                                                        <p className='text-md font-normal text-gray-700 dark:text-gray-300'>
                                                            achieverscoach@gmail.com
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Side */}
                                            <div className='space-y-6'>
                                                {/* Director Phone */}
                                                <div className='flex items-start gap-x-4'>
                                                    <PhoneIcon className='text-amber-600 dark:text-cyan-400 w-6 h-6 mt-1' />
                                                    <div className='flex flex-col'>
                                                        <p className='text-xs font-medium text-gray-600 dark:text-gray-400'>
                                                            DIRECTOR OF STUDIES
                                                        </p>
                                                        <p className='text-md font-normal text-gray-700 dark:text-gray-300'>
                                                            +263 772727117
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Address */}
                                                <div className='flex items-start gap-x-4'>
                                                    <MapPinIcon className='text-amber-600 dark:text-cyan-400 w-6 h-6 mt-1' />
                                                    <div className='flex flex-col'>
                                                        <p className='text-xs font-medium text-gray-600 dark:text-gray-400'>
                                                            ADDRESS
                                                        </p>
                                                        <p className='text-md font-normal text-gray-700 dark:text-gray-300'>
                                                            801-803 Helvetia Drive, Borrowdale<br />
                                                            Harare, Zimbabwe
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Business Hours Section */}
                                    <div className='w-full px-6 lg:px-8 bg-slate-100 dark:bg-slate-950 rounded-md p-8 flex flex-col space-y-6'>
                                        <h1 className='text-2xl font-semibold text-amber-600 dark:text-cyan-400'>
                                            BUSINESS HOURS
                                        </h1>
                                        <div className='w-full h-0.25 max-h-0.3 bg-amber-500 dark:bg-cyan-400 rounded-md' />

                                        <div className='grid grid-cols-2 gap-6'>
                                            <div className='flex flex-col'>
                                                <p className='text-xs font-medium text-gray-600 dark:text-gray-400'>
                                                    MONDAY - FRIDAY
                                                </p>
                                                <p className='text-md font-normal text-gray-700 dark:text-gray-300'>
                                                    8:00 AM - 5:00 PM
                                                </p>
                                            </div>

                                            <div className='flex flex-col'>
                                                <p className='text-xs font-medium text-gray-600 dark:text-gray-400'>
                                                    SATURDAY
                                                </p>
                                                <p className='text-md font-normal text-gray-700 dark:text-gray-300'>
                                                    8:00 AM - 5:00 PM
                                                </p>
                                            </div>

                                            <div className='flex flex-col'>
                                                <p className='text-xs font-medium text-gray-600 dark:text-gray-400'>
                                                    SUNDAY
                                                </p>
                                                <p className='text-md font-normal text-gray-700 dark:text-gray-300'>
                                                    CLOSED
                                                </p>
                                            </div>

                                            <div className='flex flex-col'>
                                                <p className='text-xs font-medium text-gray-600 dark:text-gray-400'>
                                                    HOLIDAYS
                                                </p>
                                                <p className='text-md font-normal text-gray-700 dark:text-gray-300'>
                                                    GIVE US A CALL
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Socials Section */}
                                    <div className='w-full px-6 lg:px-8 bg-slate-100 dark:bg-slate-950 rounded-md p-8 flex flex-col space-y-6'>
                                        <h1 className='text-2xl font-semibold text-amber-600 dark:text-cyan-400'>
                                            SOCIALS
                                        </h1>
                                        <div className='w-full h-0.25 max-h-0.3 bg-amber-500 dark:bg-cyan-400 rounded-md' />

                                        <div className='flex items-center gap-4'>
                                            <Image
                                                src="/media/logo_facebook.svg"
                                                width={50}
                                                height={50}
                                                className="flex items-center gap-3 p-3 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                                                alt={'Facebook logo'}                                            />

                                            <span className='font-medium text-gray-700 dark:text-gray-300'>Follow us on Facebook</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

						<section className='w-full h-auto py-20 px-4 lg:px-16 map'>
							<h1 className='text-center text-5xl md:text-6xl font-extrabold pb-12'>
								<span className='inline-block relative'>
									Find Us On The Map
									<span className='block h-1 w-16 bg-sky-500 mx-auto mt-3 rounded-full animate-pulse' />
								</span>
							</h1>

							<div className='w-full max-w-6xl mx-auto h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden border border-slate-700 shadow-xl transition-transform hover:scale-[1.01] duration-300'>
								<iframe
									title='High Achievers Coach International Academy'
									src='https://maps.google.com/maps?width=600&height=400&hl=en&q=High%20Achievers%20Coach%20Inter&t=&z=14&ie=UTF8&iwloc=B&output=embed'
									width='100%'
									height='100%'
									style={{ border: 0 }}
									loading='lazy'
									allowFullScreen
									referrerPolicy='no-referrer-when-downgrade'
								/>
							</div>
						</section>
					</main>
				</div>
			</main>
			<Footer />
		</div>
	);
}
