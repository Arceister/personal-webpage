import type { NextPage } from 'next'
import Main from '../components/pages/main'
import Seo from '../components/seo'

const Home: NextPage = () => {
  return (
    <div className='bg-white dark:bg-black'>
      <Seo />
      <Main />
    </div>
  )
}

export default Home
