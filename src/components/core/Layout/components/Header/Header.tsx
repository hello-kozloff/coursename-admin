import * as React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react'
import { useStore } from 'hooks/useStore'
import { Container, Link } from 'components/common'

export const Header = observer(() => {
  const { profileStore } = useStore()
  const profile = profileStore.state
  return (
    <Styled.Header>
      <Container>
        <Styled.ProjectName>
          Coursename.io
        </Styled.ProjectName>
        {profile ? (
          <Styled.Username>
            {`${profile.firstName} ${profile.lastName}`}
          </Styled.Username>
        ) : (
          <Styled.AuthGroup>
            <Link href="/auth/sign-in" variant="secondary">
              Sign In
            </Link>
            <Link href="/auth/sign-up" variant="accent">
              Sign Up
            </Link>
          </Styled.AuthGroup>
        )}
      </Container>
    </Styled.Header>
  )
})
