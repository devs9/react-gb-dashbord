import React, {FC} from 'react'
import {useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'

import routes from './routes'

import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import PrivateRoute from './PrivateRoute'
import Registration from '../pages/Registration'

import {IStore} from '../interfaces/Store'

const RootRouter: FC = () => {
  const $isAuth = useSelector(({global}: IStore) => global.isAuth)

  return (
    <Switch>
      <PrivateRoute redirectPath="/" path="/login" isAuth={!$isAuth} component={Login} />
      <PrivateRoute
        redirectPath="/"
        isAuth={!$isAuth}
        path="/registration"
        component={Registration}
      />
      {routes.map((route) => (
        <PrivateRoute {...route} isAuth={$isAuth} key={route.path as string} />
      ))}
      {!$isAuth && <Redirect to="/login" />}
      <Route component={NotFound} />
    </Switch>
  )
}

RootRouter.whyDidYouRender = true
export default RootRouter
