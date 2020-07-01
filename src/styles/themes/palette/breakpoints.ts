import {Breakpoint, BreakpointValues} from '@material-ui/core/styles/createBreakpoints'

const keys: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl']
const values: BreakpointValues = {
  xs: 375,
  sm: 600,
  md: 768,
  lg: 1024,
  xl: 1440
}

export const breakpoints = {
  keys,
  values
}
