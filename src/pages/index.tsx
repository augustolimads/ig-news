/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { SubscriptionButtonComponent } from 'src/components/SubscriptionButtonComponent'
import { stripe } from 'src/services/stripe'
import { formatUSD } from 'src/utils/currencyFormat'

type Props = {
  product: {
    priceId: string
    amount: number
  }
}

const Home = ({ product }: Props) => {
  const formatedValue = formatUSD(product.amount)

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className="container mx-auto flex items-center justify-between h-screen">
        <section>
          <span className="text-2xl">👏 Hey, welcome</span>
          <h1 className="text-7xl font-black">
            News about
            <br /> the <span className="text-cyan-300">React</span> world.
          </h1>
          <p className="text-2xl mt-6 mb-10">
            Get access to all the publications <br />
            <span className="text-cyan-300 font-bold">
              for {formatedValue} month
            </span>
          </p>
          <SubscriptionButtonComponent priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="woman on computer" />
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KWrvEA3KOq8Dk030oopyHzN')

  const product = {
    priceId: price.id,
    amount: price.unit_amount && price.unit_amount / 100
  }

  console.log(product)
  return {
    props: { product },
    revalidate: 60 * 60 * 24 // 24h
  }
}
