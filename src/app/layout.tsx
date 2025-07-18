import './globals.css'
import type {Metadata} from 'next'
import {Inria_Sans} from 'next/font/google'

const inriaSans = Inria_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '700'], // choose what weights you’ll use
    display: 'swap',
    variable: '--font-inria', // optional for advanced usage
})

export const metadata: Metadata = {
    title: 'HACIA Official Website',
    description: 'The new and improved website for High Achievers Coach International Academy in Zimbabwe!',
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.ico', type: 'image/x-icon' },
        ],
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inriaSans.className}>
        <body>{children}</body>
        </html>
    )
}
