import * as React from 'react';
import type { Loading } from 'types/utils'
import type { UseLoadingReturn } from './types'

export const useLoading = (defaultLoading: boolean = false): UseLoadingReturn => {
  const [isLoading, setLoading] = React.useState<Loading>(defaultLoading)
  return { isLoading, setLoading }
}
