import * as React from 'react'
import * as Styled from './styled'
import type { ButtonProps } from './types'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  console.log(props.isBlock)
  return <Styled.Button ref={ref} {...props} />
})

Button.displayName = 'Button'
export { Button }
