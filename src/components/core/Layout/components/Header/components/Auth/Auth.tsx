import * as React from 'react'
import * as Styled from './styled'
import { Link } from 'components/common'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react'

export const Auth = observer(() => {
  const { profileStore } = useStore()
  const profile = profileStore.state

  return profile === null ? (
    <Styled.Auth>
      <Link href="/auth/sign-in" variant="secondary">
        Sign In
      </Link>
      <Link href="/auth/sign-up" variant="accent">
        Sign Up
      </Link>
    </Styled.Auth>
  ) : null
})
