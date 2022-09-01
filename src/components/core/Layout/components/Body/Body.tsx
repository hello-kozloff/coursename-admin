import * as React from 'react'
import * as Styled from './styled'
import { Container } from 'components/common'

export const Body = ({ children }: React.PropsWithChildren) => {
  return (
    <Styled.Body>
      <Container>
        {children}
      </Container>
    </Styled.Body>
  )
}
