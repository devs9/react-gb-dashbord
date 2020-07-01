import {makeStyles} from '@material-ui/core/styles'

export const useBgStyles = makeStyles({
  root: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowX: 'auto',
    position: 'fixed',
    backgroundSize: 'cover',
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/githubBg.jpg)`
  }
})
