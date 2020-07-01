import React, {FC} from 'react'
import {Redirect, Route} from 'react-router'

import {IPrivateRouteProps} from '../interfaces/Router'

const PrivateRoute: FC<IPrivateRouteProps> = ({isAuth, children, ...props}) =>
  isAuth ? <Route {...props} /> : <Redirect to={{pathname: props.redirectPath}} />

PrivateRoute.whyDidYouRender = true
export default PrivateRoute
