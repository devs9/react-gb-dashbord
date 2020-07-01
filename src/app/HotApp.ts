import '../services/whyDidYouRender'

import {hot} from 'react-hot-loader/root'
import {setConfig} from 'react-hot-loader'

import App from './App'

setConfig({
  showReactDomPatchNotification: false
})

export default hot(App)
