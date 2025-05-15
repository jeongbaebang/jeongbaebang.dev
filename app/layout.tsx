import './global.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { ThemeProvider } from './components/theme-switch'
import { metaData } from './config'

const pretendard = localFont({
  src: './assets/font/pretendard-variable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl as string),
  title: {
    default: metaData.title as string,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: 'ko',
    type: 'website',
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
  twitter: {
    title: metaData.name,
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko' className={`${pretendard.variable}`}>
      <head>
        <link
          rel='alternate'
          type='application/rss+xml'
          href='/rss.xml'
          title='RSS Feed'
        />
        <link
          rel='alternate'
          type='application/atom+xml'
          href='/atom.xml'
          title='Atom Feed'
        />
        <link
          rel='alternate'
          type='application/feed+json'
          href='/feed.json'
          title='JSON Feed'
        />
      </head>
      <body
        className={`${pretendard.className} mx-auto mb-20 mt-2 flex flex-col items-center justify-center antialiased lg:mb-40 lg:mt-8`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='mt-2 flex w-full min-w-0 max-w-[624px] flex-auto flex-col px-6 sm:px-4 md:mt-6 md:px-0'>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
