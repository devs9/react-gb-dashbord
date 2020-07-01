import React, {FC} from 'react'
import {useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'

import routes from './routes'

import PrivateRoute from './PrivateRoute'
import {Login, Registration, NotFound} from '../pages'
import {useBgStyles} from '../components/layout/auth'

import {IStore} from '../store'

const RootRouter: FC = () => {
  const classes = useBgStyles()

  const $isAuth = useSelector(({global}: IStore) => global.isAuth)

  return (
    <div className={classes.root}>
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
    </div>
  )
}

RootRouter.whyDidYouRender = true
export default RootRouter
