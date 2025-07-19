import './globals.css'
import type { Metadata } from 'next'
import { Inria_Sans } from 'next/font/google'
import Script from 'next/script'

const inriaSans = Inria_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    display: 'swap',
    variable: '--font-inria',
})

export const metadata: Metadata = {
    title: 'HACIA Official Website',
    description:
        'The new and improved website for High Achievers Coach International Academy in Zimbabwe!',
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
        <head />
        <body>
        {/* Google Tag Script */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-GTCPEVQVFX"
            strategy="afterInteractive"
        />
        <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GTCPEVQVFX');
            `,
            }}
        />
        {children}
        </body>
        </html>
    )
}
