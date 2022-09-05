import * as React from 'react'
import * as Styled from './styled'
import NextLink from 'next/link'

export const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Styled.Logo>
        CourseName.io
      </Styled.Logo>
    </NextLink>
  )
}
