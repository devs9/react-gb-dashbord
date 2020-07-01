import React, {FC, memo} from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import {useInputWithIconStyle} from './styles'
import {InputWithIconT} from './ts'

const InputWithIcon: FC<InputWithIconT> = ({iconFA, ...restTextFieldProps}) => {
  const classes = useInputWithIconStyle()

  return (
    <div className={classes.root}>
      <Grid container spacing={4} alignItems="flex-end" justify="center">
        <Grid item>
          <i className={`${iconFA} ${classes.icons}`} />
        </Grid>
        <Grid item xs={9}>
          <TextField fullWidth className={classes.input} {...restTextFieldProps} />
        </Grid>
      </Grid>
    </div>
  )
}

InputWithIcon.whyDidYouRender = true
export default memo(InputWithIcon)
