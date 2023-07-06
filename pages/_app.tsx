import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/layouts/header'
import Footer from '../components/layouts/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-black h-screen'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
