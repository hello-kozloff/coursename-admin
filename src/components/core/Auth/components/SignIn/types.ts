import type { Email, Password } from 'types/utils'
import type { ApiError } from '@supabase/gotrue-js'
import type { User } from 'types/user'

export interface SignInPayload {
  email: Email
  password: Password
  remember?: boolean
}

export interface SignInProps {
  defaultValues?: SignInPayload
  onSubmit?(payload: SignInPayload): void
  onSignIn?(user: User): Promise<true | ApiError>
  onError?(error: ApiError): void
}
