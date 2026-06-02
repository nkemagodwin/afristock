import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'AFRI ~ STOCK | Premium Nigerian Agricultural Exports',
  description: 'Unlock new markets with AFRI ~ STOCK, your partner in premium Nigerian agricultural exports like Cashew, Shea Nuts, Ginger, Cocoa, and more. Quality First!',
  keywords: 'Nigerian exports, agricultural products, cashew, cocoa, ginger, shea nuts, groundnuts, sesame, soyabeans, agro exports',
  openGraph: {
    title: 'AFRI ~ STOCK | Premium Nigerian Agricultural Exports',
    description: 'Your partner in premium Nigerian agricultural exports. Quality First!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
