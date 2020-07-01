import {makeStyles, Theme} from '@material-ui/core/styles'

export const useLoginLayoutStyle = makeStyles(({transitions, spacing}: Theme) => ({
  root: {
    top: 100,
    opacity: 0.9,
    position: 'relative',
    marginBottom: spacing(7),
    transition: transitions.create(['opacity', 'top'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen
    })
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: spacing(9)
  },
  formHidden: {
    top: 0,
    opacity: 0
  }
}))
