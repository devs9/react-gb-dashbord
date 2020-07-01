import {makeStyles, Theme} from '@material-ui/core/styles'

export const useFormFooterStyle = makeStyles(({spacing, palette}: Theme) => ({
  root: {
    width: '90%',
    margin: spacing(0, '5%', 2),
    '& a': {
      color: palette.text.primary
    }
  }
}))
