import * as React from 'react';
import * as Styled from './styled';
import * as Yup from 'yup';
import { AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react'
import { supabase } from 'supabase'
import { useLoading, useStore } from 'hooks'
import { Row, Input, Button, ErrorMessage, Label } from 'components/common'
import type { SignInProps, SignInFormPayload } from './types';
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

export const SignInForm = observer(({ defaultValues, onSignIn, onError }: SignInProps) => {
  const { isLoading, setLoading } = useLoading(false)
  const { profileStore } = useStore()
  const profile = profileStore.state

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<SignInFormPayload>({
    defaultValues,
    resolver: yupResolver(Schema)
  });

  const isDisabled = isLoading || profile !== null

  const onSubmit = handleSubmit(async ({ email, password }) => {
    setLoading(true)

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
    <Styled.Form onSubmit={onSubmit}>
      <Row>
        <Row.Column>
          <Label>Email:</Label>
          <Input
            {...register('email')}
            type="email"
            defaultValue="hello.kozloff+admin@gmail.com"
            placeholder="Enter your email"
            disabled={isDisabled}
            isError={!!errors.email}
          />
          <AnimatePresence>
            {errors.email && (
              <ErrorMessage align="right">
                {errors.email.message}
              </ErrorMessage>
            )}
          </AnimatePresence>
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
            isError={!!errors.password}
          />
          <AnimatePresence>
            {errors.password && (
              <ErrorMessage align="right">
                {errors.password.message}
              </ErrorMessage>
            )}
          </AnimatePresence>
        </Row.Column>
      </Row>
      <Row>
        <Row.Column>
          <Button type="submit" disabled={isDisabled} isLoading={isLoading} isBlock>
            Sign in
          </Button>
        </Row.Column>
      </Row>
    </Styled.Form>
  );
});
