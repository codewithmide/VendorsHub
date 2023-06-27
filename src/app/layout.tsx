import './globals.css';
import '../styles/fonts.css'

export const metadata = {
  title: 'Vendors Hub',
  description: 'Resolve issues around hiring vendors for your event.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='satoshi font-medium bg-primary text-grey'>{children}</body>
    </html>
  )
}
