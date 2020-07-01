import React, {FC, memo} from 'react'
import {Link as LinRouter} from 'react-router-dom'

import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import {useFormFooterStyle} from './styles'
import {IFormFooter} from './ts'

const FormFooter: FC<IFormFooter> = ({isSignIn, to}) => {
  const classes = useFormFooterStyle()

  const forgotPswText = isSignIn ? 'Забыли пароль?' : ''
  const haveAccText = isSignIn ? 'Нет аккаунта?' : 'Уже есть аккаунт?'

  return (
    <Grid container className={classes.root}>
      <Grid item xs>
        <Link variant="body2">
          <Typography variant="subtitle1">{forgotPswText}</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link to={to} component={LinRouter}>
          <Typography variant="subtitle1">{haveAccText}</Typography>
        </Link>
      </Grid>
    </Grid>
  )
}

FormFooter.whyDidYouRender = true
export default memo(FormFooter)
