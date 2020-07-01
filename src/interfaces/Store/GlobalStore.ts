import {ActionType} from 'typesafe-actions'
//
import * as Actions from '../../store/global/actions'

/**
 * Global store
 */
export type ProfileT = {
  email: string
  fullName: string

  login?: string
  image?: string
}
export type ErrorT = string | string[]

export interface IGlobalStore {
  readonly isAuth: boolean
  readonly isFetch: boolean
  readonly profile: ProfileT
  readonly errors?: ErrorT
}

/**
 * Global actions
 */
export type GlobalActionsT = ActionType<typeof Actions>
