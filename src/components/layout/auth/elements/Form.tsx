import React, {FC} from 'react'
import Button from '@material-ui/core/Button'

import {useFormStyle} from './styles'
import {IForm} from './ts'

const Form: FC<IForm> = ({isSignIn, handleSubmit, children}) => {
  const classes = useFormStyle()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {children}
      <Button fullWidth type="submit" color="primary" variant="contained" onClick={handleSubmit}>
        {isSignIn ? 'Войти' : 'Зарегистрироваться'}
      </Button>
    </form>
  )
}

Form.whyDidYouRender = true
export default Form
