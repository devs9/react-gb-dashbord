import React, {FC, useEffect, useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'

import {useLoginLayoutStyle} from './styles'

const LoginLayout: FC = ({children}) => {
  const classes = useLoginLayoutStyle()

  const [formAnimation, setFormAnimation] = useState(classes.formHidden)

  useEffect(() => {
    setTimeout(() => {
      setFormAnimation(classes.root)
    }, 200)
  }, [classes.root])

  return (
    <Container component="main" maxWidth="xs">
      <div className={formAnimation}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
    </Container>
  )
}

LoginLayout.whyDidYouRender = true
export default LoginLayout
