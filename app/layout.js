<<<<<<< HEAD
export const metadata = {
  title: 'Contacts App',
=======
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
>>>>>>> 2815283ac370c37293570b839a69cdf10b85815c
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>
        {children}
      </body>
    </html>
  );
=======
      <body className={inter.className}>{children}</body>
    </html>
  )
>>>>>>> 2815283ac370c37293570b839a69cdf10b85815c
}
