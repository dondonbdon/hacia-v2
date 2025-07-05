'use client';


import StaffMemberGrid from '../../components/StaffMembersGrid';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';

export default function StaffPage() {
	return (
		<div className='min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col'>
			<Navbar />

			{/* Hero Section (2/3 viewport height) */}
			<section className='relative h-[66vh] w-full flex items-center justify-center bg-slate-900 text-white overflow-hidden'>
				<Image
					src='/media/uk-team-2025.jpg' // Replace with your hero image
					alt='Our Dedicated Staff'
					fill
					className='object-cover opacity-80'
					priority
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-10' />
				<div className='relative z-20 text-center px-6 max-w-4xl mx-auto'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6'>
						Meet Our Team
					</h1>
					<p className='text-lg md:text-xl text-white/90 leading-relaxed'>
						If the school itself is the car then our teachers and staff are the motor oil that is tantamount 
                        to pushing forward your children to a brighter future. Our staff attend conferences around the 
                        world seeking more knowledge in improving their teaching standards for our entire student body.
                        Have a look at them below.
					</p>
					<div className='mt-8 animate-bounce'>
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
					</div>
				</div>
			</section>

			<main className='max-w-7xl mx-auto px-6 py-16 flex-grow'>
				<h1 className='text-4xl font-bold text-center mb-8'>
					OUR STAFF
				</h1>
				<StaffMemberGrid />
			</main>
			<Footer />
		</div>
	);
}
