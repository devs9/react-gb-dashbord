import React, {FC, MouseEvent, ChangeEvent, useState, useEffect, useCallback} from 'react'

import {loginState, loginOptions} from './config'
import {addGoogleScript} from '../../utils'

import {InputWithIcon} from '../../components/atoms'
import LoginLayout, {Form, SocialIcons, FormHeader, FormFooter} from '../../components/layout/auth'

const Login: FC = () => {
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

  useEffect(() => {
    addGoogleScript()
  }, [])

  return (
    <LoginLayout>
      <FormHeader isSignIn />
      <SocialIcons />
      <div id="my-signIn" />
      <Form isSignIn handleSubmit={handleSubmit}>
        <InputWithIcon
          {...loginOptions.login}
          value={signInValues.login}
          onChange={handleChangeField}
        />
        <InputWithIcon
          {...loginOptions.password}
          value={signInValues.password}
          onChange={handleChangeField}
        />
      </Form>
      <FormFooter isSignIn to="/registration" />
    </LoginLayout>
  )
}

Login.whyDidYouRender = true
export default Login
