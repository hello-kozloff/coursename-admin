import * as React from 'react'
import { observer } from 'mobx-react'
import { useStore } from 'hooks/useStore'
import { useRouter } from 'next/router'

export const Guard = observer(({ children }: React.PropsWithChildren) => {
  const { profileStore } = useStore()
  const router = useRouter()
  const profile = profileStore.state

  React.useEffect(() => {
    if (profile === null) {
      router.push('/auth/sign-in')
    }
  }, [profile, router])

  return profile ? (
    <React.Fragment>
      {children}
    </React.Fragment>
  ) : null
})
