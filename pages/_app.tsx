import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from 'src/store/index'
import { Hooks } from 'src/hooks'
import { HeaderComponent } from 'src/components/HeaderComponent'
import { LayoutBaseComponent } from 'src/components/LayoutBaseComponent'

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  )
}

export default MyApp
