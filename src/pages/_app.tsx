import { Provider } from 'next-auth/client';
import React from 'react';
import { GlobalStyle } from '../styles/global';


export default function MyApp({ Component, pageProps }) {

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle/>
    </Provider>
  )
}