import {makeStyles, Theme} from '@material-ui/core/styles'

export const useIconAdornmentStyle = makeStyles({
  root: {
    color: '#FFF',
    backgroundColor: 'transparent !important'
  }
})
export const useInputBaseStyle = makeStyles(({spacing, palette}: Theme) => ({
  root: {
    width: '90%',
    margin: spacing(3),
    marginBottom: 0,
    '& .MuiTouchRipple-root': {
      margin: 0,
      backgroundColor: 'transparent'
    },
    '& .MuiFormLabel, .MuiFormLabel-root, .Mui-focused': {
      color: '#FFF !important'
    },
    '& .MuiFilledInput-underline:before, .MuiFilledInput-underline:after': {
      borderBottomColor: palette.success.light
    }
  }
}))
