import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from 'src/store/index'
import { Hooks } from 'src/hooks'
import { LayoutBaseComponent } from 'src/components/LayoutBaseComponent'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Hooks>
          <Head>
            <title>Boilerplate next material</title>
            <meta
              name="description"
              content="A simple project starter to work with typescript, React, NextJs, Redux Toolkit and Material UI"
            />
          </Head>
          <LayoutBaseComponent>
            <Component {...pageProps} />
          </LayoutBaseComponent>
        </Hooks>
      </Provider>
    </NextAuthProvider>
  )
}

export default MyApp
