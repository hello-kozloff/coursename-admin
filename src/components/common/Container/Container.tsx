import * as React from 'react'
import * as Styled from './styled'

export const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}
