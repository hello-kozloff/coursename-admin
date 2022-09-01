import * as React from 'react';
import type { ApiError } from '@supabase/gotrue-js'
import type { UseErrorReturn } from './types'

export const useError = (defaultError: ApiError | null = null): UseErrorReturn => {
  const [error, setError] = React.useState<ApiError | null>(defaultError)
  return { error, setError }
}
