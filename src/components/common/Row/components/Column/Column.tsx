import * as React from 'react'
import * as Styled from './styled'

export const Column = ({ children }: React.PropsWithChildren) => {
  return <Styled.Column>{children}</Styled.Column>
}
