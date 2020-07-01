import {makeStyles, Theme} from '@material-ui/core/styles'

export const useSocialIconsStyle = makeStyles(({transitions}: Theme) => ({
  root: {
    marginTop: -35,
    display: 'flex',
    paddingBottom: 45,
    position: 'relative',
    justifyContent: 'center',
    '& img': {
      width: 33,
      position: 'absolute',
      '&:hover': {
        width: 44,
        cursor: 'pointer',
        transition: transitions.create('width', {
          easing: transitions.easing.easeIn,
          duration: transitions.duration.short
        })
      }
    }
  }
}))
