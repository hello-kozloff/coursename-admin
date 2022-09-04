import * as React from 'react'
import { observer } from 'mobx-react'
import { useStore } from 'hooks/useStore'
import { useRouter } from 'next/router'
import type { GuardProps } from './types'

export const Guard = observer(({ isAuthAccess, children }: GuardProps) => {
  const router = useRouter()
  const { profileStore } = useStore()
  const profile = profileStore.state

  React.useEffect(() => {
    if (isAuthAccess) {
      if (profile === null) {
        router.push('/auth/sign-in')
      }
    } else {
      if (profile !== null) {
        router.push('/')
      }
    }
  }, [isAuthAccess, profile, router])

  return <React.Fragment>{children}</React.Fragment>
})
