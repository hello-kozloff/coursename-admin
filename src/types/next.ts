import type { AppProps } from 'next/app'

export type isAuthAccess = boolean | undefined

export interface ExtendedAppProps extends AppProps {
  Component: AppProps['Component'] & {
    isAuthAccess: isAuthAccess
  }
}
