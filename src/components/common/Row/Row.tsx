import * as React from 'react'
import * as Styled from './styled'
import { Column } from './components'

const Row = ({ children }: React.PropsWithChildren) => {
  return <Styled.Row>{children}</Styled.Row>
}

Row.Column = Column
export { Row }
