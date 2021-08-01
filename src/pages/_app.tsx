import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../shared/libs/useApollo'

import { ThemeProvider } from 'theme-ui'
import { blackTheme } from '../shared/themes/black'
import PageWrapper from '../shared/components/PageWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={blackTheme}>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
