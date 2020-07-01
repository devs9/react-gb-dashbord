import {RouteProps} from 'react-router'

export interface IPrivateRouteProps extends RouteProps {
  isAuth: boolean
  redirectPath: string
}
