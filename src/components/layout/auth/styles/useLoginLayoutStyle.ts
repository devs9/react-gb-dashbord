import {makeStyles, Theme} from '@material-ui/core/styles'

export const useLoginLayoutStyle = makeStyles(({transitions, palette, spacing}: Theme) => ({
  root: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/githubBg.jpg)`
  },
  form: {
    top: 100,
    opacity: 0.95,
    position: 'relative',
    transition: transitions.create(['opacity', 'top'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen
    })
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: spacing(2),
    backgroundColor: palette.background.paper
  },
  formHidden: {
    top: 0,
    opacity: 0
  }
}))
