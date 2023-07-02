import type { NextPage } from 'next'
import Main from '../components/pages/main'
import Seo from '../components/seo'

const Home: NextPage = () => {
  return (
    <div>
      <Seo />
      <Main />
    </div>
  )
}

export default Home
