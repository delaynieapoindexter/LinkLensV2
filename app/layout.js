import './globals.css'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'LinkLens',
  description: 'Where photographers, videographers, and models connect worldwide.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050509] text-white">
        <NavBar />
        <main className="max-w-6xl mx-auto px-4 pb-12 pt-4">
          {children}
        </main>
      </body>
    </html>
  )
}
