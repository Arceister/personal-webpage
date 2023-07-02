import type { NextPage } from 'next'
import Link from 'next/link'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/pages/main'
import { getStaticPaths } from './[slug]'

const Home: NextPage = () => {
  return (
    <div className='bg-black'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
