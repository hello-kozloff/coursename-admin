import styled, { css } from 'styled-components'
import { darken, hideVisually, transparentize } from 'polished'
import { CheckboxProps } from './types'

export const Checkbox = styled.label<Pick<CheckboxProps, 'disabled'>>`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 8px;
  user-select: none;
  
  ${({ disabled }) => !disabled && css`
    cursor: pointer;
  `};
`

export const Box = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid ${darken(.08, '#F3F4F5')};
  background-color: ${darken(.02, '#F3F4F5')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 0;
  border-radius: 8px;
  transition: .15s ease-out;
`;


export const Input = styled.input`
  ${hideVisually()};

  &:checked + ${Box} {
    background-color: #2DB38B;
    border-color: #2DB38B;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z'/%3E%3C/svg%3E");
    background-size: 60%;
  }

  &:focus-visible + ${Box} {
    box-shadow: 0 0 0 1px ${transparentize(.4, '#2DB38B')}, 0 0 0 4px ${transparentize(.8, '#2DB38B')};
  }
  
  &:disabled + ${Box} {
    background-color: #dedede;
  }
`;
