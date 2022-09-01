import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import type { ErrorMessageProps } from './types'

export const AnimationController = motion.div;

export const ErrorMessage = styled.div<ErrorMessageProps>`
  margin-top: 4px;
  color: #c23a34;
  
  ${({ align }) => align && css`
    display: block;
  `};

  ${({ isBlock }) => isBlock && css`
    padding: 16px;
    margin-bottom: 24px;
    background-color: #c23a34;
    border-radius: 8px;
    color: #ffffff;
  `};
  
  ${({ align }) => {
    switch (align) {
      case 'left': return css`
        text-align: left;
      `;
      case 'center': return css`
        text-align: center;
      `;
      case 'right': return css`
        text-align: right;
      `;
    }
  }};
`
