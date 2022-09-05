import styled, { css } from 'styled-components'
import { AvatarProps } from './types'

export const Avatar = styled.div<Pick<AvatarProps, 'size'>>`
  ${({ size }) => {
    switch (size) {
      case 'primary': return css`
        width: 36px;
        height: 36px;
      `
    }
  }}
  
  img {
    ${({ size }) => {
      switch (size) {
        case 'primary': return css`
        border-radius: 50%;
      `
      }
    }}
  }
`
