import {MouseEvent} from 'react'

export type PasswordAdornmentT = {
  isShowPsw: boolean
  handleShowPsw: () => void
  handleHidePsw: (event: MouseEvent<HTMLButtonElement>) => void
}
