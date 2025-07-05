'use client'

// import Image from 'next/image'
import Navbar from '../components/Navbar'


export default function Page() {
    return (
        <>
            <Navbar />
            <main className="pt-32 px-6 md:px-20 text-white">
                <h1 className="text-4xl font-bold mb-4">News</h1>
                <p className="text-lg leading-relaxed">
                    High Achievers Coach International Academy is a diverse and inclusive learning environment...
                </p>
                {/* Add more content as needed */}
            </main>

        </>
    );
}