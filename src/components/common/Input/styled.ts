import styled, { css } from 'styled-components'
import { darken, transparentize } from 'polished'
import type { InputProps } from './types'

export const Input = styled.div`
  position: relative;
  display: block;
`;

export const Field = styled.input<InputProps>`
  width: 100%;
  padding: 12px 16px;
  border-radius: 24px;
  box-sizing: border-box;
  border: 1px solid ${darken(.08, '#F3F4F5')};
  background-color: #F3F4F5;
  font-family: inherit;
  font-size: inherit;
  outline: none;

  ${({ isError }) => isError && css`
    box-shadow: 0 0 0 1px rgba(255, 125, 121, .5), 0 0 0 4px rgba(255, 125, 121, .3);
    background-color: #ffffff !important;
  `};
  
  &, &::placeholder {
    transition: .25s ease-out;
  }
  
  &::placeholder {
    color: #9FA0AE;
  }
  
  &:disabled {
    background-color: #dedede;
  }

  &:focus-visible {
    box-shadow: 0 0 0 1px ${transparentize(.4, '#2DB38B')}, 0 0 0 5px ${transparentize(.8, '#2DB38B')};
  }

  &:not(:disabled) {
    &:hover, &:focus {
      background-color: #ffffff;
    }
  }
`

export const Error = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  margin: auto;
  padding: 0 16px;
  line-height: 30px;
  background-color: #ffffff;
  border-radius: 0 30px 30px 0;
  user-select: none;
`;
