import React, {FC, useEffect, useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'

import {useLoginLayoutStyle} from './styles'

const LoginLayout: FC = ({children}) => {
  const classes = useLoginLayoutStyle()

  const [formAnimation, setFormAnimation] = useState(classes.formHidden)

  useEffect(() => {
    setTimeout(() => {
      setFormAnimation(classes.form)
    }, 200)
  }, [classes.form])

  return (
    <div className={classes.root}>
      <div className={formAnimation}>
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper}>{children}</Paper>
        </Container>
      </div>
    </div>
  )
}

LoginLayout.whyDidYouRender = true
export default LoginLayout
