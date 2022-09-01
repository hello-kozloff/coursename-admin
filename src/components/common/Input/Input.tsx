import * as React from 'react'
import * as Styled from './styled'
import type { InputProps } from './types'

const Input = React.forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
  return <Styled.Input ref={ref} {...props} />
})

Input.displayName = 'Input'
export { Input }
