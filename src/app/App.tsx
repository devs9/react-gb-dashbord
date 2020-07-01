import React, {FC} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ToastContainer, Flip} from 'react-toastify'

import {basename} from '../constants'

import RootRouter from '../router'

const App: FC = () => {
  return (
    <BrowserRouter basename={basename}>
      <RootRouter />
      <ToastContainer newestOnTop hideProgressBar autoClose={3000} transition={Flip} />
    </BrowserRouter>
  )
}

App.whyDidYouRender = true
export default App
