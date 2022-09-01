import type { ApiError } from '@supabase/gotrue-js'

export type UseErrorReturn = {
  error: ApiError | null
  setError: (
    value: (((prevState: (ApiError | null)) => (ApiError | null)) | ApiError | null)
  ) => void
}
