import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { blackTheme } from '../shared/themes/black'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={blackTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
