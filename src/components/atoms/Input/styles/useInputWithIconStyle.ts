import {createStyles, makeStyles, Theme} from '@material-ui/core/styles'

export const useInputWithIconStyle = makeStyles(({spacing, palette}: Theme) =>
  createStyles({
    root: {
      margin: spacing(1),
      paddingLeft: spacing(2),
      paddingRight: spacing(2)
    },
    input: {
      '& .MuiFormLabel-root': {
        color: palette.text.primary
      },
      '& .MuiInput-underline:after, .MuiInput-underline:before': {
        borderBottomColor: palette.success.light
      }
    },
    icons: {
      color: palette.text.primary
    }
  })
)
