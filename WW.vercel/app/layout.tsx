import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Warmwell Kachliarstvo | Kachľové pece na mieru',
  description: 'Prémiové kachľové pece, prenosné kachle, rekonštrukcie a kompletný servis komínov. Warmwell Kachliarstvo z Granč-Petroviec pre Spiš, Prešovský a Košický kraj.',
  keywords: ['Warmwell', 'Marián Pitoňák', 'kachliarstvo', 'kachľové pece', 'Granč-Petrovce', 'Spiš', 'Prešovský kraj', 'Košický kraj'],
  generator: 'v0.app',
  openGraph: {
    title: 'Warmwell Kachliarstvo | Teplo s príbehom',
    description: 'Kachľové pece s dušou. Remeslo, ktoré hreje po generácie.',
    type: 'website',
    locale: 'sk_SK',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
