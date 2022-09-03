import styled, { css } from 'styled-components'
import { ButtonProps } from './types'
import { transparentize } from 'polished'

export const Button = styled.button<ButtonProps>`
  position: relative;
  padding: 11px 16px;
  box-sizing: border-box;
  border: 1px solid transparent;
  background-color: #2DB38B;
  border-radius: 30px;
  transition: .25s ease-out;
  line-height: 24px;
  font-size: inherit;
  font-weight: 600;
  user-select: none;
  overflow: hidden;
  outline: none;
  color: #ffffff;

  ${({ isBlock }) => isBlock && css`
    display: block;
    width: 100%;
  `};

  ${({ isLoading }) => isLoading && css`
    pointer-events: none;

    &:after {
      content: "";

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background-color: #1e8e6c;
      background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='L9' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 0 0' xml:space='preserve'%3E%3Cpath fill='%23fff' d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'%3E%3CanimateTransform attributeName='transform' attributeType='XML' type='rotate' dur='1s' from='0 50 50' to='360 50 50' repeatCount='indefinite' /%3E%3C/path%3E%3C/svg%3E");
      background-position: center;
      background-repeat: no-repeat;
    }
  `};

  &:focus-visible {
    box-shadow: 0 0 0 1px ${transparentize(.4, '#2DB38B')}, 0 0 0 5px ${transparentize(.8, '#2DB38B')};
  }

  &:not(:disabled) {
    &:hover, &:focus {
      background-color: #249e79;
    }

    &:active {
      background-color: #1e8e6c;
    }
  }

  &:not(:disabled) {
    cursor: pointer;
  }
  
  &:disabled {
    background-color: #1e8e6c;
  }
`
