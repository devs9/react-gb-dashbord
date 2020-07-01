import {makeStyles, Theme} from '@material-ui/core/styles'

export const useSocialIconsStyle = makeStyles(({transitions}: Theme) => ({
  root: {
    height: 50,
    width: '60%',
    // marginTop: -25,
    display: 'flex',
    // paddingBottom: 15,
    // position: 'relative',
    justifyContent: 'space-evenly',
    '& img': {
      width: 33,
      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.4)',
        transition: transitions.create('transform', {
          easing: transitions.easing.easeIn,
          duration: transitions.duration.short
        })
      }
    }
  }
}))

// position: 'absolute',
