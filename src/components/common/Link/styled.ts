import styled, { css } from 'styled-components'
import { LinkProps } from './types'
import { transparentize } from 'polished'

export const Link = styled.a<Pick<LinkProps, 'variant' | 'isBlock'>>`
  outline: none;
  box-sizing: border-box;
  transition: .25s ease-out;
  border-radius: 8px;
  font-size: inherit;
  
  ${({ variant }) => {
    switch (variant) {
      case 'primary': return css`
        color: #2DB38B;

        &:hover, &:focus-visible {
          color: #1e8e6c;
        }
      `
      case 'secondary': return css`
        color: #000000;

        &:hover, &:focus-visible {
          color: #249e79;
        }

        &:active {
          color: #1e8e6c;
        }
      `
      case 'accent': return css`
        color: #ffffff;
        font-weight: 600;
        background-color: #2DB38B;
        border-radius: 30px;
        padding: 10px 16px;

        &:hover, &:focus-visible {
          background-color: #249e79;
          box-shadow: 0 0 0 4px ${transparentize(.8, '#2DB38B')};
        }

        &:active {
          background-color: #1e8e6c;
        }
      `
    }
  }};
  
  ${({ isBlock }) => isBlock && css`
    width: 100%;
    display: block;
    text-align: center;
  `};
`
