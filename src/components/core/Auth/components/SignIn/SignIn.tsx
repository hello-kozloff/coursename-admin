import * as React from 'react';
import * as Styled from './styled';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react'
import { supabase } from 'supabase'
import { useLoading, useStore } from 'hooks'
import { Row, Input, Button, Label, Checkbox, Link } from 'components/common'
import type { SignInProps, SignInPayload } from './types';
import type { User } from 'types/user'

const Schema = Yup.object({
  email: Yup
    .string()
    .email('Invalid email format')
    .required('Required'),
  password: Yup
    .string()
    .required('Required')
}).required()

export const SignIn = observer(({ defaultValues, onSubmit, onSignIn, onError }: SignInProps) => {
  const { isLoading, setLoading } = useLoading(false)
  const { profileStore } = useStore()
  const profile = profileStore.state

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<SignInPayload>({
    defaultValues,
    resolver: yupResolver(Schema)
  });

  const isDisabled = isLoading || profile !== null

  const handleFormSubmit = handleSubmit(async (payload) => {
    onSubmit?.(payload)
    setLoading(true)
    console.log(payload)

    const { email, password } = payload
    const { user, error } = await supabase.auth.signIn({
      email,
      password
    })

    if (error) {
      setLoading(false)
      return onError?.(error)
    }

    if (user) {
      onSignIn?.(user as User).finally(() => {
        setLoading(false)
      });
    }
  })

  return (
    <Styled.SignIn onSubmit={handleFormSubmit}>
      <Styled.Title>Sign In</Styled.Title>
      <Row>
        <Row.Column>
          <Label>Email:</Label>
          <Input
            {...register('email')}
            type="email"
            defaultValue="hello.kozloff+admin@gmail.com"
            placeholder="Enter your email"
            disabled={isDisabled}
            isError={errors.email && errors.email.message}
          />
        </Row.Column>
      </Row>
      <Row>
        <Row.Column>
          <Label>Password:</Label>
          <Input
            {...register('password')}
            type="password"
            defaultValue="password"
            placeholder="Enter your password"
            disabled={isDisabled}
            isError={errors.password && errors.password.message}
          />
        </Row.Column>
      </Row>
      <Styled.Helpers>
        <Row.Column>
          <Checkbox {...register('remember')} disabled={isDisabled}>
            Remember me
          </Checkbox>
        </Row.Column>
        <Row.Column>
          <Link href="/auth/recovery">
            Forgot you password?
          </Link>
        </Row.Column>
      </Styled.Helpers>
      <Styled.Footer>
        <Row>
          <Row.Column>
            <Button type="submit" disabled={isDisabled} isLoading={isLoading} isBlock>
              Sign in
            </Button>
          </Row.Column>
        </Row>
        <Row>
          <Row.Column>
            <Link href="/auth/sign-up" isBlock>
              Create account
            </Link>
          </Row.Column>
        </Row>
      </Styled.Footer>
    </Styled.SignIn>
  );
});
