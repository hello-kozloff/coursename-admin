import type { Email, Password } from 'types/utils'
import type { ApiError } from '@supabase/gotrue-js'
import type { User } from 'types/user'

export interface SignInFormPayload {
  email: Email
  password: Password
}

export interface SignInProps {
  defaultValues?: SignInFormPayload
  onSignIn?(user: User): Promise<true | ApiError>
  onError?(error: ApiError): void
}
