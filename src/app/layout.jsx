import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cora Colvin | Private Chef Studio',
  description: 'Content management for Cora Colvin\'s private chef portfolio',
}

export default function StudioLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
