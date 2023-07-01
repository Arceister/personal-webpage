import type { NextPage } from 'next'
import Link from 'next/link'
import Header from '../components/header'
import { getStaticPaths } from './[slug]'

const Home: NextPage = () => {
  return (
    <Header />
  )
}

export default Home
