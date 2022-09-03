import * as React from 'react'
import * as Styled from './styled'
import NextLink from 'next/link'
import type { LinkProps } from './types'

export const Link = ({
  children,
  variant = 'primary',
  isBlock,
  ...props
}: LinkProps) => {
  return (
    <NextLink {...props} passHref>
      <Styled.Link variant={variant} isBlock={isBlock}>
        {children}
      </Styled.Link>
    </NextLink>
  )
}
