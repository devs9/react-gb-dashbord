import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import {ThemeProvider as MuiProvider} from '@material-ui/core/styles'

import store from './store'
import {HotApp} from './app'
import {MuiTheme, StyledTheme, GlobalStyled} from './styles'

import * as serviceWorker from './services/serviceWorker'
import './styles/scss/index.scss'

render(
  <Provider store={store}>
    <ThemeProvider theme={StyledTheme}>
      <MuiProvider theme={MuiTheme}>
        <HotApp />
      </MuiProvider>
    </ThemeProvider>
    <GlobalStyled />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
