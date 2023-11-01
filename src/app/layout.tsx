import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import { Header } from '@/components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bazar de Garagem',
  description: 'Itens usados anunciados por Guilherme Huff em Santa-Helena - PR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <Header />
        {children}
        <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}
