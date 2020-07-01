import React, {FC, MouseEvent, ChangeEvent, useCallback, useState} from 'react'

import {regState, regOptions} from './config'

import {InputWithIcon} from '../../components/atoms'
import LoginLayout, {Form, SocialIcons, FormHeader, FormFooter} from '../../components/layout/auth'

const Registration: FC = () => {
  const [signUpValues, setSignUpValues] = useState(regState)

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

  return (
    <LoginLayout>
      <FormHeader isSignIn={false} />
      <SocialIcons />
      <Form isSignIn={false} handleSubmit={handleSubmit}>
        <InputWithIcon
          {...regOptions.name}
          value={signUpValues.name}
          onChange={handleChangeField}
        />
        <InputWithIcon
          {...regOptions.password}
          value={signUpValues.password}
          onChange={handleChangeField}
        />
      </Form>
      <FormFooter isSignIn={false} to="/login" />
    </LoginLayout>
  )
}

Registration.whyDidYouRender = true
export default Registration
