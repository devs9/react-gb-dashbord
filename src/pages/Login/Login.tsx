import React, {FC, MouseEvent, ChangeEvent, useState, useCallback, useMemo} from 'react'

import {useSocialScript} from '../../hooks'
import {loginState, fieldDefaultProps} from './config'

import {InputBase} from '../../components/core'
import LoginLayout, {Form, SocialIcons, FormHeader, FormFooter} from '../../components/layout/auth'

const Login: FC = () => {
  useSocialScript()

  const [signInValues, setSignInValues] = useState(loginState)

  const handleChangeField = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const {name, value} = event.currentTarget

    setSignInValues((prevState) => ({...prevState, [name]: value}))
  }, [])
  const handleSubmit = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()

      console.log(signInValues)
    },
    [signInValues]
  )

  const loginProps = useMemo(() => {
    return {
      ...fieldDefaultProps.loginOptions,
      value: signInValues.login,
      onChange: handleChangeField
    }
  }, [handleChangeField, signInValues.login])
  const pswProps = useMemo(() => {
    return {
      ...fieldDefaultProps.pswOptions,
      value: signInValues.password,
      onChange: handleChangeField
    }
  }, [handleChangeField, signInValues.password])

  return (
    <LoginLayout>
      <FormHeader isSignIn />
      <SocialIcons />
      <div id="my-signIn" />
      <Form isSignIn handleSubmit={handleSubmit}>
        <InputBase {...loginProps} />
        <InputBase {...pswProps} />
      </Form>
      <FormFooter isSignIn to="/registration" />
    </LoginLayout>
  )
}

Login.whyDidYouRender = true
export default Login
