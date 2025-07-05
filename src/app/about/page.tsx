'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { CheckCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const slideUp = {
	hidden: { opacity: 0, y: 50 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutPage() {
	const departments = [
		{
			name: 'Sciences',
			description: 'Explore Physics, Chemistry, Biology, and more to develop critical thinking and analytical skills.',
			slug: 'sciences',
		},
		{
			name: 'Humanities',
			description: 'Dive into History, Geography, Literature, and understand human culture and society.',
			slug: 'humanities',
		},
		{
			name: 'Arts',
			description: 'Unleash your creativity with courses in visual arts, music, and design thinking.',
			slug: 'arts',
		},
		{
			name: 'Commercials',
			description: 'Learn the fundamentals of commerce, finance, and economics to prepare for the business world.',
			slug: 'commercials',
		},
		{
			name: 'Languages',
			description: 'Master multiple languages to broaden communication skills and cultural understanding.',
			slug: 'languages',
		},
		{
			name: 'Sports',
			description: 'From ball games to swimming, you will get the opportunity to play and excel at it all.',
			slug: 'sports',
		},
	];

	return (
		<div className='flex flex-col min-h-screen text-slate-900 font-inria bg-slate-50 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300'>
			<Navbar />
			<main className='flex-grow space-y-32 overflow-x-hidden'>
				{/* WHO ARE WE Section */}
				<section className='relative w-full h-[66vh] flex items-center justify-center bg-black text-white overflow-hidden'>
					{/* Background Image */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
						className='absolute inset-0'
					>
						<Image
							src='/media/sports-day.jpg'
							alt='About Background'
							fill
							className='object-cover object-center z-0'
							priority
						/>
					</motion.div>

					{/* Gradient Overlay */}
					<div className='absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-10' />

					{/* Content */}
					<div className='relative z-20 text-center px-6 md:px-12'>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className='uppercase text-sm md:text-base tracking-widest text-amber-400 font-semibold mb-4'
						>
							Discover HACIA
						</motion.p>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='text-4xl md:text-5xl lg:text-6xl font-bold font-inria leading-snug'
						>
							WHO ARE WE?
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className='mt-4 text-sm md:text-lg max-w-2xl mx-auto font-inria text-white/90'
						>
							Founded with a passion for holistic learning and spiritual growth, High Achievers Coach International Academy provides a Christ-centered, globally-minded education experience for the next generation of leaders.
						</motion.p>

						{/* Animated Arrow */}
						<motion.div
							animate={{
								y: [0, 15, 0],
								opacity: [0.8, 1, 0.8]
							}}
							transition={{
								repeat: Infinity,
								duration: 2,
								ease: "easeInOut"
							}}
							className='mt-12'
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
								className='w-8 h-8 mx-auto text-amber-400'
							>
								<path d="M12 5v14M19 12l-7 7-7-7"/>
							</svg>
						</motion.div>
					</div>
				</section>

				{/* Vision Section */}
				<section className='py-20 px-6 md:px-20 bg-white dark:bg-slate-900 transition-colors duration-300'>
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						variants={container}
						className='max-w-screen-xl mx-auto space-y-8 relative'
					>
						<motion.div variants={item}>
							<h2 className='text-amber-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase flex gap-3'>
								<CheckCircle className='w-5 h-5' />
								Our Vision
							</h2>
						</motion.div>

						<motion.h3 variants={item} className='text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100'>
							The HACIA Vision
						</motion.h3>

						<motion.p variants={item} className='text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300'>
							The vision of HACIA started in 1998 when the founding Director introduced a successful Commercials Department at St. Faith&#39;s School in Rusape, with the support of Headmaster Mr. Moses Mukoyi. That same spirit continues to drive the institution today.
						</motion.p>

						<motion.div variants={item} className='absolute top-24 left-0 hidden md:block h-24 w-1 bg-amber-600 dark:bg-cyan-400 rounded transition-colors duration-300' />

						<motion.blockquote variants={item} className='border-l-4 border-amber-600 dark:border-cyan-400 pl-4 italic text-slate-600 dark:text-slate-400 text-lg transition-colors duration-300'>
							&#34;Education is not preparation for life; education is life itself.&#34; – John Dewey
						</motion.blockquote>
					</motion.div>
				</section>

				{/* Drives Section */}
				<section className='py-20 px-6 md:px-20 bg-slate-100 dark:bg-slate-950/50 transition-colors duration-300'>
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						variants={container}
						className='max-w-screen-xl mx-auto flex flex-col xl:flex-row gap-16 items-stretch'
					>
						<motion.div variants={item} className='flex-1 space-y-6'>
							<h2 className='text-amber-600 dark:text-cyan-400 text-sm font-semibold tracking-widest uppercase flex gap-3'>
								<CheckCircle className='w-5 h-5' />
								What Drives Us
							</h2>
							<h3 className='text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100'>
								The Heart Behind HACIA
							</h3>
							<div className='space-y-6 text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300'>
								{[
									{
										title: 'Our Birth',
										desc: `HACIA was born of a vision by a godly man, Dr. Tapera Chikandiwa, who was motivated to nurture students in the example of Jesus Christ: "And Jesus increased in wisdom and in stature and in favour with God and man."`,
									},
								].map(({ title, desc }) => (
									<motion.div
										key={title}
										variants={item}
										className='flex items-start gap-4'
									>
										<CheckCircle2 className='mt-1 text-amber-600 dark:text-cyan-400 w-6 h-6 flex-shrink-0 transition-colors duration-300' />
										<div>
											<h4 className='font-semibold text-slate-800 dark:text-slate-100 mb-1'>
												{title}
											</h4>
											<p>{desc}</p>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>

						<motion.div variants={item} className='w-full xl:w-[600px] mx-auto xl:mx-0'>
							<div className='relative rounded-xl overflow-hidden shadow-lg w-full h-full border-4 border-amber-500/20 dark:border-cyan-400/20 transition-colors duration-300 hover:scale-[1.02] transition-transform duration-300'>
								<Image
									src='/media/squad.jpg'
									alt='What drives HACIA'
									width={800}
									height={600}
									className='rounded-xl w-full h-full object-cover shadow-md'
									priority
								/>
							</div>
						</motion.div>
					</motion.div>
				</section>

				{/* Values Section */}
				<section className='py-20 px-6 md:px-20 bg-white dark:bg-slate-900 transition-colors duration-300'>
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						variants={container}
						className='max-w-screen-xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 items-center'
					>
						{/* Left: Image */}
						<motion.div variants={item} className='hidden xl:block w-full max-w-2xl xl:mx-0'>
							<div className='w-full border-4 border-amber-500/20 dark:border-cyan-400/20 rounded-xl overflow-hidden transition-colors duration-300 hover:scale-[1.02] transition-transform duration-300'>
								<Image
									src='/media/IMG_6974.jpg'
									alt='HACIA and staff'
									width={800}
									height={600}
									className='w-full object-cover shadow-md'
									priority
								/>
							</div>
						</motion.div>

						{/* Right: Text content */}
						<motion.div variants={item} className='space-y-6'>
							<div className='flex items-center gap-3 text-amber-600 dark:text-cyan-400 uppercase tracking-widest text-sm font-bold transition-colors duration-300'>
								<CheckCircle className='w-5 h-5' />
								Our Values
							</div>

							<h2 className='text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100'>
								Rooted in Faith. Driven by Excellence.
							</h2>

							<p className='text-slate-600 dark:text-slate-400 text-base leading-relaxed transition-colors duration-300'>
								At HACIA, our values shape everything — from how we teach to how we grow.
							</p>

							<p className='text-slate-700 dark:text-slate-300 text-base leading-relaxed transition-colors duration-300'>
								High Achievers Coach International Academy is a Christian school that believes in nurturing every student&#39;s potential. We develop the whole person — spiritually, morally, and intellectually — guided by biblical principles and academic excellence.
							</p>

							<motion.div
								variants={container}
								className='flex flex-wrap gap-4 pt-4'
							>
								{[
									'Christ-Centered Teaching',
									'Holistic Development',
									'Academic Excellence',
									'Spiritual Growth',
									'Purpose-Driven Leadership',
								].map((point, idx) => (
									<motion.div
										key={idx}
										variants={item}
										className='flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium shadow-sm dark:bg-cyan-900 dark:text-cyan-300 transition-colors duration-300 hover:scale-105'
									>
										<CheckCircle2 className='w-4 h-4' />
										{point}
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</motion.div>
				</section>

				{/* Founders Section */}
				<section className='py-12 px-6 md:px-20 bg-slate-100 dark:bg-slate-950/50 transition-colors duration-300'>
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						variants={container}
						className='max-w-screen-xl mx-auto space-y-6'
					>
						<motion.div variants={item} className='flex items-center gap-2 text-amber-600 dark:text-cyan-400 text-left transition-colors duration-300'>
							<CheckCircle className='w-5 h-5' />
							<h3 className='uppercase text-sm font-semibold tracking-widest'>
								THE FOUNDERS
							</h3>
						</motion.div>

						<motion.p variants={item} className='text-left text-slate-700 dark:text-slate-300 transition-colors duration-300'>
							HACIA was started from the ground up by the Achievers Family, led by Dr. Tapera Chikandiwa along with a community of dedicated family and friends.
						</motion.p>

						<motion.div
							variants={slideUp}
							className='border-4 border-amber-500/20 dark:border-cyan-400/20 rounded-lg overflow-hidden transition-colors duration-300 hover:scale-[1.01]'
						>
							<Image
								src='/media/fam.jpg'
								alt='Achiever Family'
								width={1600}
								height={600}
								className='w-full object-cover'
							/>
						</motion.div>
					</motion.div>
				</section>

				{/* Directors & Staff Section */}
				<section className='py-20 px-6 md:px-20 bg-white dark:bg-slate-900 transition-colors duration-300'>
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						variants={container}
						className='max-w-screen-xl mx-auto text-center'
					>
						<motion.div variants={item} className='flex items-center justify-center gap-2 text-amber-600 dark:text-cyan-400 mb-2 transition-colors duration-300'>
							<CheckCircle className='w-5 h-5' />
							<h3 className='uppercase text-sm font-semibold tracking-widest'>
								Our Directors & Staff
							</h3>
						</motion.div>

						<motion.h2 variants={item} className='text-3xl font-bold mb-12 text-slate-800 dark:text-slate-100'>
							Meet Our Leadership Team
						</motion.h2>

						<motion.div
							variants={container}
							className='grid sm:grid-cols-2 md:grid-cols-4 gap-10'
						>
							{[
								{
									name: 'Dr. Chikandiwa',
									role: 'Director of Studies',
									src: '/media/dr_tapera_picture.jpg',
								},
								{
									name: 'Mrs. P Chikandiwa',
									role: 'Director of Studies',
									src: '/media/dr_tapera_picture.jpg',
								},
								{
									name: 'Mr. Magodoro',
									role: 'Headmaster',
									src: '/media/dr_tapera_picture.jpg',
								},

							].map((person, i) => (
								<motion.div
									key={i}
									variants={item}
									whileHover={{ y: -5 }}
									className='rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800'
								>
									<div className='relative w-48 h-48 mx-auto rounded-full border-4 border-amber-400 dark:border-cyan-400 p-1'>
										<div className='w-full h-full rounded-full overflow-hidden'>
											<Image
												src={person.src}
												alt={person.name}
												width={192}
												height={192}
												className='object-cover w-full h-full rounded-full'
												unoptimized
											/>
										</div>
									</div>

									<h3 className='mt-6 text-xl font-semibold text-slate-800 dark:text-slate-100'>
										{person.name}
									</h3>
									<p className='mt-2 text-sm text-slate-600 dark:text-slate-400'>
										{person.role}
									</p>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</section>

				{/* Staff Section */}
				<section className='py-20 px-6 md:px-20 bg-slate-100 dark:bg-slate-950/50 transition-colors duration-300'>
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						variants={container}
						className='max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center'
					>
						<motion.div variants={item} className='border-4 border-amber-500/20 dark:border-cyan-400/20 rounded-xl overflow-hidden transition-colors duration-300 hover:scale-[1.01]'>
							<Image
								src='/media/achiever_family.jpeg'
								alt='Staff group photo'
								width={800}
								height={600}
								className='rounded-xl shadow-lg w-full object-cover'
								priority
							/>
						</motion.div>

						<motion.div variants={item} className='space-y-6 text-center md:text-left'>
							<div className='flex items-center justify-center md:justify-start gap-2 text-amber-600 dark:text-cyan-400 mb-2 transition-colors duration-300'>
								<CheckCircle className='w-5 h-5' />
								<h3 className='uppercase text-sm font-semibold tracking-widest'>
									Our Staff
								</h3>
							</div>

							<h2 className='text-3xl font-bold text-slate-800 dark:text-slate-100'>
								Dedicated and Skilled Team
							</h2>

							<p className='text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-xl mx-auto md:mx-0'>
								We have over 70 highly trained staff members capable of cutting and polishing the diamond within each student, nurturing their full potential. Our team is committed to holistic development and personalized attention for every learner.
							</p>

							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className='flex justify-center md:justify-start'
							>
								<Link
									href='/about/our-staff'
									className='inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-400 active:scale-95 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-400'
								>
									Our Entire Staff
								</Link>
							</motion.div>
						</motion.div>
					</motion.div>
				</section>

				{/* Offering Subjects Section */}
				<section className='py-20 px-6 md:px-20 bg-white dark:bg-slate-900 transition-colors duration-300'>
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						variants={container}
						className='max-w-screen-2xl mx-auto space-y-6 justify-center'
					>
						<motion.div variants={item} className='flex gap-3 text-amber-600 dark:text-cyan-400 justify-center transition-colors duration-300'>
							<CheckCircle className='w-5 h-5' />
							<h2 className='text-sm font-semibold tracking-widest uppercase flex gap-3'>
								Our Offering Subjects
							</h2>
						</motion.div>

						<motion.p variants={item} className='text-base md:text-lg text-slate-700 dark:text-slate-300 text-center mx-auto max-w-3xl'>
							Our curriculum spans a wide range of disciplines designed to nurture well-rounded students. Click below to see the full detailed offerings for each department.
						</motion.p>

						<motion.div
							variants={item}
							className='flex justify-center'
						>
							<Link
								href='/about/offering'
								className='inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-400 active:scale-95 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-400'
							>
								Show Full Offering
							</Link>
						</motion.div>

						<motion.div
							variants={container}
							className='w-full mt-12'
						>
							<div className='relative'>
								<div className='flex overflow-x-auto no-scrollbar justify-center pb-4'>
									<div className='flex space-x-6 min-h-[280px] mx-auto'>
										{departments.map(
											({ name, description, slug }) => (
												<motion.div
													key={slug}
													variants={item}
													whileHover={{ y: -10 }}
													className='min-w-[200px] max-w-[200px] h-[280px] flex flex-col items-center justify-between border border-slate-300 dark:border-slate-700 rounded-lg p-5 hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 text-center'
												>
													<h3 className='text-lg font-semibold text-slate-800 dark:text-slate-100'>
														{name}
													</h3>
													<p className='mt-3 text-sm text-slate-600 dark:text-slate-400 flex-grow'>
														{description}
													</p>
													<Link
														href={`/about/offering/${slug}`}
														className='mt-4 inline-flex items-center text-amber-600 hover:text-amber-800 font-semibold transition dark:text-cyan-400 dark:hover:text-cyan-300'
													>
														Learn More
														<ArrowRight className='w-4 h-4 ml-2' />
													</Link>
												</motion.div>
											)
										)}
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</section>
			</main>

			<Footer />
		</div>
	);
}