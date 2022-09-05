import * as React from 'react'
import * as Styled from './styled'
import type { AvatarProps } from './types'
import Image from 'next/image'

export const Avatar = ({
  url = '/images/image-not-found.png',
  size = 'primary'
}: AvatarProps) => {
  return (
    <Styled.Avatar size={size}>
      <Image src={url} width="100%" height="100%" objectFit="cover"/>
    </Styled.Avatar>
  )
}
