import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CreatorsHome.xyz - The Ultimate Platform for Content Creators',
  description: 'Join thousands of creators who are building their digital empire with CreatorsHome.xyz - the all-in-one platform for content creation, monetization, and community building.',
  keywords: ['content creators', 'monetization', 'platform', 'saas', 'digital empire'],
  authors: [{ name: 'CreatorsHome Team' }],
  creator: 'CreatorsHome',
  publisher: 'CreatorsHome.xyz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://creatorshome.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CreatorsHome.xyz - Build Your Creator Empire',
    description: 'The all-in-one platform that empowers content creators to build, grow, and monetize their digital presence.',
    url: 'https://creatorshome.xyz',
    siteName: 'CreatorsHome.xyz',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CreatorsHome.xyz - Platform for Content Creators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreatorsHome.xyz - Build Your Creator Empire',
    description: 'The all-in-one platform that empowers content creators to build, grow, and monetize their digital presence.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 