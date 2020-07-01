import {makeStyles, Theme} from '@material-ui/core/styles'

export const useFormHeaderStyle = makeStyles(({spacing, palette}: Theme) => ({
  root: {
    bottom: 60,
    width: '80%',
    display: 'flex',
    borderRadius: 4,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#979797',
    paddingBottom: spacing(1)
  },
  avatar: {
    margin: spacing(1),
    backgroundColor: `${palette.error.light} !important`
  }
}))
