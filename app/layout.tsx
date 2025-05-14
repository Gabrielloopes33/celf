import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'CELF EMPREENDIMENTOS',
  description: 'CELF EMPREENDIMENTOS',
  icons: {
    icon: '/ISO09.png', // ou '/favicon.png' se você estiver usando PNG
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
