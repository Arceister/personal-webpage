import type { NextPage } from 'next'
import Link from 'next/link'
import Footer from '../components/footer'
import Header from '../components/header'
import { getStaticPaths } from './[slug]'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default Home
