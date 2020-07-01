import Color from 'color'
import {createMuiTheme} from '@material-ui/core/styles'

import {colors, rateColors, breakpoints} from './palette'

export const MuiTheme = createMuiTheme({
  palette: {
    /**
     * Styles
     */
    text: {
      primary: colors.textWhite
    },
    background: {
      default: colors.bgWhite,
      paper: colors.bgDark
    },
    /**
     * Colors
     */
    info: {
      main: colors.info,
      light: Color(colors.info).lighten(rateColors.lighten).string()
    },
    error: {
      main: colors.error,
      light: colors.errorLight
    },
    primary: {
      main: colors.main,
      dark: Color(colors.main).darken(rateColors.darken).string(),
      light: Color(colors.main).lighten(rateColors.lighten).string()
    },
    warning: {
      main: colors.warning,
      dark: Color(colors.warning).darken(rateColors.darken).string()
    },
    success: {
      main: colors.success,
      dark: Color(colors.success).darken(rateColors.darken).string()
    },
    secondary: {
      main: colors.secondary,
      dark: Color(colors.secondary).darken(rateColors.darken).string(),
      light: Color(colors.secondary).lighten(rateColors.lighten).string()
    }
  },
  breakpoints: {
    keys: breakpoints.keys,
    values: breakpoints.values
  }
})
