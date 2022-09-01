import * as React from 'react';
import { useError, useStore } from 'hooks'
import { SignInForm } from 'components/core'
import { ErrorMessage } from 'components/common'
import { useRouter } from 'next/router'
import type { User } from 'types/user'
import type { ApiError } from '@supabase/gotrue-js'

const SignIn = () => {
  const { error, setError } = useError();
  const { profileStore } = useStore()
  const router = useRouter()

  const handleSignIn = async (user: User): Promise<true | ApiError> => {
    setError(null)
    return new Promise((resolve, reject) => {
      profileStore.fetchProfile(user).then(() => {
        router.push('/')
        resolve(true)
      }).catch((error) => {
        setError(error)
        reject(error)
      })
    })
  }

  return (
    <div>
      {error && (
        <ErrorMessage isBlock>
          {`Error: ${error.message}`}
        </ErrorMessage>
      )}
      <SignInForm
        defaultValues={{
          email: 'hello.kozloff+admin@gmail.com',
          password: 'password'
        }}
        onSignIn={handleSignIn}
        onError={setError}
      />
    </div>
  )
}

export default SignIn
