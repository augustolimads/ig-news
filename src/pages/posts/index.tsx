import { createClient } from '@prismicio/client'
import Head from 'next/head'

const list = [1, 2, 3]

export async function getStaticProps() {
  const client = createClient('')

  const page = await client.getAllByType('post')

  return { props: { page } }
}

export default function Post() {
  return (
    <>
      <Head>
        <title>Post | Ignews </title>
      </Head>

      <main className="container pt-36 flex  justify-center">
        <div className="max-w-3xl space-y-16">
          {list.map((item) => (
            <a className="block" href="" key={item}>
              <time className="text-zinc-300 flex items-center">
                12 de março de 2021
              </time>
              <strong className="block text-xl mt-4 leading-8 hover:text-yellow-500 transition-colors">
                Nome do post
              </strong>
              <p className="text-zinc-300 mt-1 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                pariatur iure veniam nobis cumque? Aperiam quas temporibus
                tempora repellat voluptates id. Iusto sequi veniam, quasi
                possimus doloremque temporibus commodi. Dignissimos.
              </p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
