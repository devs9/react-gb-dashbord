import React, {FC, MouseEvent, memo, useState, useCallback} from 'react'

import InputLabel from '@material-ui/core/InputLabel'
import FilledInput from '@material-ui/core/FilledInput'
import FormControl from '@material-ui/core/FormControl'

import {PasswordAdornment} from './elements'
import {useInputBaseStyle} from './styles'
import {IInputBase} from './ts'

const InputBase: FC<IInputBase> = ({label, ...restFieldProps}) => {
  const classes = useInputBaseStyle()

  const [isShowPsw, setIsShowPsw] = useState(false)

  const handleShowPsw = useCallback(() => {
    setIsShowPsw(true)
  }, [])
  const handleHidePsw = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsShowPsw(false)
  }, [])

  const {id} = restFieldProps
  const pswType = isShowPsw ? 'text' : 'password'
  const passwordEndAdornment = (id === 'password' || id === 'repeatPassword') && (
    <PasswordAdornment
      isShowPsw={isShowPsw}
      handleShowPsw={handleShowPsw}
      handleHidePsw={handleHidePsw}
    />
  )

  return (
    <FormControl className={classes.root} variant="outlined">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <FilledInput type={pswType} endAdornment={passwordEndAdornment} {...restFieldProps} />
    </FormControl>
  )
}

InputBase.whyDidYouRender = true
export default memo(InputBase)
