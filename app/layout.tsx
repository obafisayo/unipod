import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Unipod — University Innovation Pods',
  description: "Unipod is Africa's network of university innovation pods — turning bold student ideas into ventures with AI & robotics labs, prototyping, mentorship, and investment. Powered by UNDP's timbuktoo initiative.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
