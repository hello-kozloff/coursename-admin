import * as React from 'react'
import * as Styled from './styled'
import type { LabelProps } from './types'

export const Label = ({ children }: LabelProps) => {
  return <Styled.Label>{children}</Styled.Label>
}
