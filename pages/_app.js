import * as React from 'react'

import Meta from '../components/meta'
import ColorSwitcher from '../components/color-switcher'
import { ThemeProvider } from 'theme-ui'
import theme from '../lib/theme'
import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import { useThemedStylesWithMdx } from '@theme-ui/mdx'

const mdxComponents = {}

const App = ({ Component, pageProps }) => {
  const componentsWithStyles = useThemedStylesWithMdx(
    useMDXComponents(mdxComponents),
  )

  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <ColorSwitcher />
      <MDXProvider components={componentsWithStyles}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
