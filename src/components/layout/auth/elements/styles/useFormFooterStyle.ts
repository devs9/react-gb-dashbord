import {makeStyles, Theme} from '@material-ui/core/styles'

export const useFormFooterStyle = makeStyles(({spacing}: Theme) => ({
  root: {
    width: '90% !important',
    margin: spacing(0, '5%', 2),
    '& a': {
      color: '#FFF'
    }
  }
}))
