import {makeStyles, Theme} from '@material-ui/core/styles'

export const useFormStyle = makeStyles(({spacing, palette}: Theme) => ({
  root: {
    width: '100%',
    '& .MuiButtonBase-root': {
      width: '90%',
      borderRadius: 5,
      backgroundColor: palette.success.dark,
      margin: spacing(3, '5%', 2)
    }
  }
}))
