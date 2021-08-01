import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../shared/libs/useApollo'

import { ThemeProvider } from 'theme-ui'
import { blackTheme } from '../shared/themes/black'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={blackTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
