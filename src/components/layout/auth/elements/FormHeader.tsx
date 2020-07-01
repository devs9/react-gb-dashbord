import React, {FC, memo} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import {useFormHeaderStyle} from './styles'

const FormHeader: FC<{isSignIn: boolean}> = ({isSignIn}) => {
  const classes = useFormHeaderStyle()

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} color="secondary">
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {isSignIn ? 'Вход' : 'Регистрация'}
      </Typography>
    </div>
  )
}

FormHeader.whyDidYouRender = true
export default memo(FormHeader)
