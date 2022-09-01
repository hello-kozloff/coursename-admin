import * as React from 'react'
import * as Styled from './styled'
import type { ErrorMessageProps } from './types'

export const animations = {
  initial: {
    opacity: 0,
    y: -2,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -2,
  },
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  return (
    <Styled.AnimationController {...animations}>
      <Styled.ErrorMessage {...props} />
    </Styled.AnimationController>
  )
}
