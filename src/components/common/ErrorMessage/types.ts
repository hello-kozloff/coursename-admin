import * as React from 'react';

export type ErrorMessageProps = React.PropsWithChildren<{
  align?: 'left' | 'center' | 'right'
  isBlock?: boolean
}>
