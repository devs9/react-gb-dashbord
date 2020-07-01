import {useEffect} from 'react'

import {addGoogleScript, addFacebookScript} from '../utils'

export function useSocialScript() {
  useEffect(() => {
    addGoogleScript()
    addFacebookScript()
  }, [])
}
