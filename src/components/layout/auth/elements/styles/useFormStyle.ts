import {makeStyles, Theme} from '@material-ui/core/styles'

export const useFormStyle = makeStyles(({spacing}: Theme) => ({
  root: {
    width: '100%',
    marginTop: spacing(2),
    '& .MuiButtonBase-root': {
      width: '90%',
      borderRadius: 5,
      margin: spacing(3, '5%', 2)
    }
  }
}))
