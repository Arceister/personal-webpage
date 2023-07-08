import type { NextPage } from 'next'
import Main from '../components/pages/main'
import Seo from '../components/seo'

const Home: NextPage = () => {
  return (
    <div className='bg-[#FEFEFE] dark:bg-[#1B1C1E]'>
      <Seo />
      <Main />
    </div>
  )
}

export default Home
