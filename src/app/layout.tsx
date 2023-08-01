import './globals.css';
import '../styles/fonts.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  metadataBase: new URL('https://vendorshub.com.ng'),
  openGraph: {
    title: 'Vendors Hub',
    description: 'Resolve issues around hiring vendors for your event.',
    url: 'https://vendorshub.com.ng',
    siteName: 'Vendors Hub',
    images: [
      {
        url: '/images/opengraph-image.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'Vendors Hub',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='satoshi bg-primary text-black transition duration-300'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
