'use client';

import {useState, useEffect, useRef} from 'react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [hideHamburger, setHideHamburger] = useState(false);
	const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
	const lastScrollYRef = useRef(0);


	const pathname = usePathname();

	// Scroll logic
	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;

			if (currentY > lastScrollYRef.current && currentY > 80) {
				setScrollDirection('down');
			} else if (currentY < lastScrollYRef.current) {
				setScrollDirection('up');
			}

			lastScrollYRef.current = currentY;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleMenuToggle = () => {
		if (!menuOpen) {
			setMenuOpen(true);
			setTimeout(() => setHideHamburger(true), 300);
		} else {
			setHideHamburger(false);
			setMenuOpen(false);
		}
	};

	const isActive = (href: string) => pathname === href;

	const navLinkClass = (href: string) =>
		`transition transform hover:scale-110 duration-200 ${
			isActive(href) ? 'text-yellow-300 font-bold' : 'text-white/80'
		}`;

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-20 py-5 flex items-center justify-between transition-transform duration-300 ${
					scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
				}  text-white`}>
				{/* Logo + Name */}
				<div className='flex items-center gap-x-4'>
					<Link href="/" className="flex items-center gap-x-2">
						<Image
							src="/media/hac_logo.svg"
							alt="HACIA Logo"
							width={64}
							height={64}
							className="w-12 h-12 md:w-16 md:h-16"
							priority
						/>
						<div className="hidden sm:block">
							<p className="text-sm md:text-base font-black">HIGH ACHIEVERS COACH</p>
							<p className="text-xs md:text-sm">INTERNATIONAL ACADEMY</p>
						</div>
					</Link>
				</div>

				{/* Desktop nav */}
				<nav className="hidden xl:flex gap-8 text-sm font-medium bg-black/30 px-10 py-4 rounded-4xl">
					<Link href="/about" className={navLinkClass('/about')}>ABOUT US</Link>
					<Link href="/contact" className={navLinkClass('/contact')}>CONTACT</Link>
					<Link href="https://highachievers.sybylcloud.com/">LOGIN</Link>
				</nav>

				{/* Admission CTA */}
				<Link
					href="/holiday"
					className="group hidden xl:inline-block bg-blue-900/50 text-blue-100 px-10 py-4 rounded-4xl font-semibold hover:bg-blue-100 hover:text-blue-900/50 backdrop-blur-md transition">
					<span className="text-sm md:text-base">HOLIDAY PROGRAM</span>
				</Link>

				{/* Hamburger for small screens */}
				{!hideHamburger && (
					<button
						className="xl:hidden flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer z-30"
						aria-label="Toggle menu"
						onClick={handleMenuToggle}>
						<span className={`block h-1 w-full rounded bg-white transition-transform duration-300 origin-left ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
						<span className={`block h-1 w-full rounded bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
						<span className={`block h-1 w-full rounded bg-white transition-transform duration-300 origin-left ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
					</button>
				)}
			</header>

			{/* Overlay and sliding mobile menu */}
			{menuOpen && (
				<>
					<div className="fixed inset-0 bg-black/75 z-40" onClick={() => setMenuOpen(false)} />
					<div className={`fixed top-0 right-0 h-full bg-black/50 backdrop-blur-sm w-full z-50 transform transition-transform duration-300 ease-in-out ${
						menuOpen ? 'translate-x-0' : 'translate-x-full'
					}`}>
						{/* Close Button */}
						<button
							className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-blue-400"
							onClick={() => {
								setMenuOpen(false);
								setTimeout(() => setHideHamburger(false), 300);
							}}>
							&times;
						</button>

						{/* Mobile Nav */}
						<nav className="flex flex-col items-start gap-6 mt-24 ml-6 text-white text-xl">
							<Link href="/about" onClick={() => setMenuOpen(false)} className={navLinkClass('/about')}>ABOUT US</Link>
							<Link href="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass('/contact')}>CONTACT</Link>
							<Link href="https://highachievers.sybylcloud.com/" onClick={() => setMenuOpen(false)}>LOGIN</Link>
							<Link
								href="/holiday"
								onClick={() => setMenuOpen(false)}
								className="bg-blue-900 text-white px-6 py-3 mt-6 rounded-full font-semibold hover:bg-blue-800 transition">
								HOLIDAY PROGRAM
							</Link>
						</nav>
					</div>
				</>
			)}
		</>
	);
}
