import * as React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react'
import { useStore } from 'hooks/useStore'
import { Container } from 'components/common'
import Link from 'next/link'

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
            <Link href="/auth/sign-in">
              Sign In
            </Link>
            <Link href="/auth/sign-up">
              Sign Up
            </Link>
          </Styled.AuthGroup>
        )}
      </Container>
    </Styled.Header>
  )
})
