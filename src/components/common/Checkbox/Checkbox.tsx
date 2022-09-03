import * as React from 'react'
import * as Styled from './styled'
import type { CheckboxProps } from './types'

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, ...props }: CheckboxProps, ref) => {
    return (
      <Styled.Checkbox disabled={props.disabled}>
        <Styled.Input {...props} ref={ref} type="checkbox" />
        <Styled.Box />
        {children}
      </Styled.Checkbox>
    )
  }
)

Checkbox.displayName = 'Checkbox'
export { Checkbox }
