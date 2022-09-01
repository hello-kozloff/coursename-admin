import type { AppProps } from 'next/app'

export interface ExtendedAppProps extends AppProps {
  Component: AppProps['Component'] & {
    isSecure?: boolean
  }
}
