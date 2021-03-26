import { Provider } from 'next-auth/client';
import React from 'react';
import { GlobalStyle } from '../styles/global';


function MyApp({ Component, pageProps }) {

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle/>
    </Provider>
  )
}

export default MyApp
