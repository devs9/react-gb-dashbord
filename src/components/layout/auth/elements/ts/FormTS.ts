import {MouseEvent} from 'react'

export interface IForm {
  isSignIn: boolean
  handleSubmit: (event: MouseEvent<HTMLButtonElement>) => void
}

export interface IFormFooter {
  isSignIn: boolean
  to: string
}
