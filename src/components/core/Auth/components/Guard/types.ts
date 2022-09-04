import * as React from 'react';
import { isAuthAccess } from 'types/next'

export interface GuardProps extends React.PropsWithChildren {
  isAuthAccess: isAuthAccess
}
