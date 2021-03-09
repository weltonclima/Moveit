import { Provider } from 'next-auth/client';
import React from 'react';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
