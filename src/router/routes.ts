import * as Pages from '../pages'
import {IPrivateRouteProps} from './ts'

const routes: Array<Omit<IPrivateRouteProps, 'isAuth'>> = [
  {exact: true, redirectPath: '/login', path: '/', component: Pages.Home},
  {exact: true, redirectPath: '/login', path: '/settings', component: Pages.Settings},
  {exact: true, redirectPath: '/login', path: '/profile', component: Pages.Profile}
]

export default routes
