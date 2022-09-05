import * as React from 'react'
import * as Styled from './styled'
import * as Components from './components'
import { Container } from 'components/common'

export const Header = () => {
  return (
    <Styled.Header>
      <Container>
        <Components.Logo />
        <React.Fragment>
          <Components.Auth />
          <Components.Profile />
        </React.Fragment>
      </Container>
    </Styled.Header>
  )
}
