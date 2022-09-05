import * as React from 'react'
import * as Styled from './styled'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react'
import { Avatar } from 'components/common'

export const Profile = observer(() => {
  const { profileStore } = useStore()
  const profile = profileStore.state

  return profile ? (
    <Styled.Profile>
      <Styled.Username>
        {profileStore.getUsername('compact')}
      </Styled.Username>
      <Avatar url={profile.avatarUrl || undefined} />
    </Styled.Profile>
  ) : null
})
