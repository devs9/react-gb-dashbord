import {mapValues} from 'lodash'

import {colors, breakpoints} from './palette'

export const StyledTheme = {
  colors,
  breakpoints: mapValues(breakpoints.values, (value) => `${value}px`)
}
