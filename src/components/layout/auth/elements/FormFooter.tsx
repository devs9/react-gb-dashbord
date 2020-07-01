import React, {FC, memo} from 'react'
import {Link as LinRouter} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

import {useFormFooterStyle} from './styles'
import {IFormFooter} from './ts'

const FormFooter: FC<IFormFooter> = ({isSignIn, to}) => {
  const classes = useFormFooterStyle()

  return (
    <Grid container className={classes.root}>
      <Grid item xs>
        <Link variant="body2">{isSignIn ? 'Забыли пароль?' : ''}</Link>
      </Grid>
      <Grid item>
        <Link to={to} component={LinRouter}>
          {isSignIn ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
        </Link>
      </Grid>
    </Grid>
  )
}

FormFooter.whyDidYouRender = true
export default memo(FormFooter)
