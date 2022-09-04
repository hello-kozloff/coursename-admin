import * as React from 'react'
import * as Styled from './styled'
import type { InputProps } from './types'
import { ErrorMessage } from 'components/common'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const { isError } = props
    return (
      <Styled.Input>
        <Styled.Field ref={ref} {...props} />
        {isError && (
          <Styled.Error>
            <ErrorMessage>{isError}</ErrorMessage>
          </Styled.Error>
        )}
      </Styled.Input>
    )
  }
)

Input.displayName = 'Input'
export { Input }
