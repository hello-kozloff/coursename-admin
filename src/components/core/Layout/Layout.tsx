import * as React from 'react'
import * as Styled from './styled'
import * as Components from './components'
import type { LayoutProps } from './types'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Styled.Layout>
      <Components.Header />
      <Components.Body>
        {children}
      </Components.Body>
      <Components.Footer />
    </Styled.Layout>
  )
}
