import styled, { css } from 'styled-components'
import type { InputProps } from './types'

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 12px 18px;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #b3b3b3;
  background-color: #f8f8f8;
  font-family: inherit;
  outline: none;

  ${({ isError }) => isError && css`
    border-color: #c23a34;
  `};
  
  &, &::placeholder {
    transition: .25s ease-out;
  }
  
  &:disabled {
    background-color: #dedede;
  }

  &:not(:disabled) {
    &:hover, &:focus {
      background-color: #efefef;
    }
  }
`
