import { Inter } from 'next/font/google'
import './globals.css'
import App from '@/components/App'
import { StoreProvider } from '@/redux/StoreProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Druco E-Commerce App',
  description: 'tahasayedportfolio.surge.sh',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <StoreProvider>
          <App>{children}</App>
        </StoreProvider>
        
      </body>
    </html>
  )
}
