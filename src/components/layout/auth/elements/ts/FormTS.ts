import {MouseEvent} from 'react'

type IsSignInT = {isSignIn: boolean}

export interface IFormHeader extends IsSignInT {}

export interface IForm extends IsSignInT {
  handleSubmit: (event: MouseEvent<HTMLButtonElement>) => void
}

export interface IFormFooter extends IsSignInT {
  to: string
}
