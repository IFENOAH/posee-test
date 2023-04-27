import { Layout } from '@/components/layout/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '@/services/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
