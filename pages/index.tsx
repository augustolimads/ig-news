/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { HomeTemplate } from 'src/templates/HomeTemplate'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <HomeTemplate />
    </>
  )
}

export default Home
