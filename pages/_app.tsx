import * as React from 'react';
import { Auth, Layout } from 'components/core'
import { Stylesheet } from 'styles/index'
import type { ExtendedAppProps } from 'types/next'
import 'reset-css/reset.css'

export default function App({ Component, pageProps }: ExtendedAppProps) {
  const Guard = Component.isSecure ? Auth.Guard : React.Fragment

  return (
    <React.Fragment>
      <Layout>
        <Guard>
          <Component {...pageProps} />
        </Guard>
      </Layout>
      <Stylesheet />
    </React.Fragment>
  )
}
