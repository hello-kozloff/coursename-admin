import * as React from 'react';
import { LinkProps as NextLinkProps } from 'next/link'

export interface LinkProps extends React.PropsWithChildren<NextLinkProps> {
  variant?: 'primary' | 'secondary' | 'accent'
  isBlock?: boolean
}
