'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const SubjectsPage = () => {

	type Subject = {
		name: string;
		code?: string;
	};

	type Level = {
		name: string;
		description: string;
		subjects: Subject[];
	};
	const levels:  Level[] = [
		{
			name: 'Checkpoint (Form 1 - Form 2)',
			description:
				'Our foundational program preparing students for advanced studies with a broad curriculum.',
			subjects: [
				{ code: '0845', name: 'Mathematics' },
				{ code: '0844', name: 'English' },
				{ code: '0843', name: 'Science' },
				{ code: '0846', name: 'Global Perspectives' },
				{ code: '0847', name: 'ICT' },
				{ code: '0848', name: 'French' },
				{ code: '0849', name: 'Shona' },
				{ code: '0850', name: 'History' },
			],
		},
		{
			name: 'IGCSE (Form 3 - Form 4)',
			description:
				'Internationally recognized qualifications with a wide range of subject options.',
			subjects: [
				{ code: '0580', name: 'Mathematics' },
				{ code: '0500', name: 'English Language' },
				{ code: '0620', name: 'Chemistry' },
				{ code: '0610', name: 'Biology' },
				{ code: '0625', name: 'Physics' },
				{ code: '0455', name: 'Economics' },
				{ code: '0460', name: 'Geography' },
				{ code: '0470', name: 'History' },
				{ code: '0410', name: 'Physical Education' },
			],
		},
		{
			name: 'A Level (Lower 6 - Upper 6)',
			description:
				'Advanced studies for specialization in chosen fields with Cambridge International.',
			subjects: [
				{ code: '9709', name: 'Mathematics' },
				{ code: '9701', name: 'Chemistry' },
				{ code: '9702', name: 'Physics' },
				{ code: '9700', name: 'Biology' },
				{ code: '9708', name: 'Economics' },
				{ code: '9696', name: 'Geography' },
				{ code: '9489', name: 'History' },
				{ code: '9608', name: 'Computer Science' },
			],
		},
		{
			name: 'Sports Program',
			description: 'Comprehensive sports development across all levels.',
			subjects: [
				{ name: 'Football' },
				{ name: 'Basketball' },
				{ name: 'Athletics' },
				{ name: 'Swimming' },
				{ name: 'Tennis' },
				{ name: 'Volleyball' },
			],
		},
	];

	return (
		<div className='min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col'>
			<Navbar />

			{/* Animated Hero Section */}
			<section className='relative h-[66vh] w-full flex items-center justify-center bg-slate-900 text-white overflow-hidden'>
				<Image
					src='/media/img_3.png'
					alt='Academic Subjects'
					fill
					className='object-cover opacity-80'
					priority
					quality={90}
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-10' />

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='relative z-20 text-center px-6 max-w-5xl mx-auto'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6'>
						Our{' '}
						<span className='text-amber-400 dark:text-cyan-400'>
							Academic
						</span>{' '}
						Programs
					</h1>
					<motion.p
						className='text-lg md:text-xl text-white/90 leading-relaxed mb-8'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.8 }}>
						Cambridge Assessment International Education curriculum
						offering rigorous, internationally-recognized
						qualifications from Checkpoint through to A Levels.
					</motion.p>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ repeat: Infinity, duration: 2 }}
						className='mt-8'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='w-8 h-8 mx-auto text-amber-400 dark:text-cyan-400'>
							<path d='M12 5v14M19 12l-7 7-7-7' />
						</svg>
					</motion.div>
				</motion.div>
			</section>

			<main className='max-w-7xl mx-auto px-6 py-16 flex-grow'>
				{/* Cambridge Certification Banner */}
				<div className='bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-16 text-center border border-amber-200 dark:border-cyan-800'>
					<div className='flex justify-center mb-4'>
						<Image
							src='/media/caie.png'
							alt='Cambridge International'
							width={200}
							height={80}
							className='h-16 w-auto'
						/>
					</div>
					<h2 className='text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4'>
						Cambridge Assessment International Education
					</h2>
					<p className='text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
						We offer internationally recognized Cambridge
						qualifications including Checkpoint, IGCSE and A Levels,
						preparing students for success in higher education and
						beyond.
					</p>
				</div>

				{/* Academic Levels */}
				{levels.map((level, index) => (
					<section key={level.name} className='mb-20'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className='mb-8'>
							<h2 className='text-2xl md:text-3xl font-bold text-amber-600 dark:text-cyan-400 mb-2'>
								{level.name}
							</h2>
							<p className='text-slate-600 dark:text-slate-300'>
								{level.description}
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1 + 0.2,
							}}
							viewport={{ once: true }}
							className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
							{level.subjects.map((subject) => (
								<div
									key={subject.name}
									className='bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200 dark:border-slate-700'>
									<h3 className='text-xl font-semibold text-slate-800 dark:text-slate-100 mb-1'>
										{subject.name}
									</h3>
									{subject.code && (
										<p className='text-sm text-amber-600 dark:text-cyan-400 font-mono mb-2'>
											Cambridge {subject.code}
										</p>
									)}
									<div className='h-1 w-12 bg-amber-400 dark:bg-cyan-400 my-2'></div>
									<p className='text-sm text-slate-500 dark:text-slate-400'>
										{level.name.includes('Sports')
											? 'Available to all levels'
											: 'Core subject'}
									</p>
								</div>
							))}
						</motion.div>
					</section>
				))}

				{/* Lifelong Learning */}
				<section className='bg-amber-50 dark:bg-cyan-950/30 rounded-xl p-8 my-16 border border-amber-200 dark:border-cyan-800'>
					<h2 className='text-2xl md:text-3xl font-bold text-amber-700 dark:text-cyan-400 mb-4'>
						Lifelong Learning & Exit Skills Program
					</h2>

					<div className='flex flex-col md:flex-row gap-8 items-center'>
						<div className='flex-1'>
							<p className='text-slate-700 dark:text-slate-300 mb-4'>
								Launching in January 2025, our program equips students and parents with hands-on, future-proof
								skills alongside IGCSE, AS, and AL academics.
							</p>

							<p className='text-slate-700 dark:text-slate-300 mb-4'>
								Skills will be assessed by City & Guilds and local industry leaders to meet global standards.
							</p>

							<p className='text-slate-700 dark:text-slate-300 mb-6'>
								Coach TC joins the Land Services team—learn how to grow tomatoes for real profits and more!
								Contact the Academy to enrol.
							</p>

							<button className='px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors dark:bg-cyan-600 dark:hover:bg-cyan-700'>
								Learn More
							</button>
						</div>

						<div className='relative w-full md:w-64 h-64'>
							<Image
								src='/media/farm-dr.jpg'
								alt='Lifelong Learning'
								fill
								className='object-cover rounded-lg'
							/>
						</div>
					</div>
				</section>


				{/* Call to Action */}
				<section className='text-center py-12'>
					<h2 className='text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4'>
						Need More Information?
					</h2>
					<p className='text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6'>
						We are ready to answer all your
						questions about our academic programs, subject choices,
						and the Cambridge curriculum.
					</p>
					<div className='flex flex-wrap justify-center gap-4'>
						<button className='px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium transition-colors dark:bg-cyan-600 dark:hover:bg-cyan-700'>
							Contact Us
						</button>
						{/*<button className='px-8 py-3 border border-amber-600 text-amber-600 hover:bg-amber-50 rounded-full font-medium transition-colors dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900/30'>*/}
						{/*	Download Prospectus*/}
						{/*</button>*/}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default SubjectsPage;
