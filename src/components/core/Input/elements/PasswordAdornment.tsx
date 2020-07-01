import React, {FC, memo} from 'react'

import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'

import {useIconAdornmentStyle} from '../styles'
import {PasswordAdornmentT} from '../ts'

const PasswordAdornment: FC<PasswordAdornmentT> = ({isShowPsw, handleShowPsw, handleHidePsw}) => {
  const classes = useIconAdornmentStyle()

  return (
    <InputAdornment position="end">
      <IconButton
        edge="end"
        onClick={handleShowPsw}
        className={classes.root}
        onMouseDown={handleHidePsw}
        aria-label="toggle password visibility">
        {isShowPsw ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  )
}

PasswordAdornment.whyDidYouRender = true
export default memo(PasswordAdornment)
