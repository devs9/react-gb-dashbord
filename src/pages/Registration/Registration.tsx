import React, {FC, MouseEvent, ChangeEvent, useState, useCallback, useMemo} from 'react'

import {useSocialScript} from '../../hooks'
import {registrationState, fieldDefaultProps} from './config'

import {InputBase} from '../../components/core'
import LoginLayout, {Form, SocialIcons, FormHeader, FormFooter} from '../../components/layout/auth'

const Registration: FC = () => {
  useSocialScript()

  const [signUpValues, setSignUpValues] = useState(registrationState)

  const handleChangeField = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const {name, value} = event.currentTarget

    setSignUpValues((prevState) => ({...prevState, [name]: value}))
  }, [])
  const handleSubmit = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()

      console.log(signUpValues)
    },
    [signUpValues]
  )

  const emailProps = useMemo(() => {
    return {
      ...fieldDefaultProps.emailOptions,
      value: signUpValues.email,
      onChange: handleChangeField
    }
  }, [handleChangeField, signUpValues.email])
  const loginProps = useMemo(() => {
    return {
      ...fieldDefaultProps.loginOptions,
      value: signUpValues.login,
      onChange: handleChangeField
    }
  }, [handleChangeField, signUpValues.login])
  const nameProps = useMemo(() => {
    return {
      ...fieldDefaultProps.firstNameOptions,
      value: signUpValues.firstName,
      onChange: handleChangeField
    }
  }, [handleChangeField, signUpValues.firstName])
  const lastNameProps = useMemo(() => {
    return {
      ...fieldDefaultProps.lastNameOptions,
      value: signUpValues.lastName,
      onChange: handleChangeField
    }
  }, [handleChangeField, signUpValues.lastName])
  const pswProps = useMemo(() => {
    return {
      ...fieldDefaultProps.pswOptions,
      value: signUpValues.password,
      onChange: handleChangeField
    }
  }, [handleChangeField, signUpValues.password])
  const repeatPswProps = useMemo(() => {
    return {
      ...fieldDefaultProps.pswRepeatOptions,
      value: signUpValues.repeatPassword,
      onChange: handleChangeField
    }
  }, [handleChangeField, signUpValues.repeatPassword])

  return (
    <LoginLayout>
      <FormHeader isSignIn={false} />
      <SocialIcons />
      <Form isSignIn={false} handleSubmit={handleSubmit}>
        <InputBase {...emailProps} />
        <InputBase {...nameProps} />
        <InputBase {...lastNameProps} />
        <InputBase {...loginProps} />
        <InputBase {...pswProps} />
        <InputBase {...repeatPswProps} />
      </Form>
      <FormFooter isSignIn={false} to="/login" />
    </LoginLayout>
  )
}

Registration.whyDidYouRender = true
export default Registration
