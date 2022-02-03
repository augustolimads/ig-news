import type { NextPage } from 'next'
import Head from 'next/head'
import { HeaderComponent } from 'src/components/HeaderComponent'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Início | ig.news</title>
      </Head>

      <HeaderComponent />

      <p>home</p>
    </div>
  )
}

export default Home
