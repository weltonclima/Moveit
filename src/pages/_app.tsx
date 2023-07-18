import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';

export default function MyApp({ Component, pageProps }:AppProps) {

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle/>
    </Provider>
  )
}