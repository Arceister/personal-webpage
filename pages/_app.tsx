import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='bg-[#FEFEFE] dark:bg-[#1B1C1E] h-screen'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
