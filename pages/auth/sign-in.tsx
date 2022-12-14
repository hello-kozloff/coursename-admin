import * as React from 'react';
import { useError, useStore } from 'hooks'
import { Auth } from 'components/core'
import { ErrorMessage } from 'components/common'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import type { User } from 'types/user'
import type { ApiError } from '@supabase/gotrue-js'

const SignIn = () => {
  const { error, setError } = useError();
  const { profileStore } = useStore()
  const router = useRouter()

  const handleSubmit = () => {
    setError(null)
  }

  const handleSignIn = React.useCallback(async (user: User): Promise<true | ApiError> => {
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
  }, [])

  return (
    <div>
      <AnimatePresence>
        {error && (
          <ErrorMessage isBlock>
            {`Error: ${error.message}`}
          </ErrorMessage>
        )}
      </AnimatePresence>
      <Auth.SignIn
        defaultValues={{
          email: 'hello.kozloff+admin@gmail.com',
          password: 'password'
        }}
        onSubmit={handleSubmit}
        onSignIn={handleSignIn}
        onError={setError}
      />
    </div>
  )
}

SignIn.isAuthAccess = false

export default SignIn
