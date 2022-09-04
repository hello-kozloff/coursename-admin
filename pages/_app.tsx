import * as React from 'react';
import { Auth, Layout } from 'components/core'
import { Stylesheet } from 'styles/index'
import type { ExtendedAppProps } from 'types/next'
import 'reset-css/reset.css'

export default function App({ Component, pageProps }: ExtendedAppProps) {
  const Page = <Component {...pageProps} />

  return (
    <React.Fragment>
      <Layout>
        {Component.isAuthAccess !== undefined ? (
          <Auth.Guard isAuthAccess={Component.isAuthAccess}>
            {Page}
          </Auth.Guard>
        ) : Page}
      </Layout>
      <Stylesheet />
    </React.Fragment>
  )
}
