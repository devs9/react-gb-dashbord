import React, {FC, memo} from 'react'
import {useDispatch} from 'react-redux'

import {googleSvg, fbSvg} from '../../../../constants'
import {googleAuthSaga, fbAuthSaga} from '../../../../store/global'

import {useSocialIconsStyle} from './styles'

const SocialIcons: FC = () => {
  const dispatch = useDispatch()
  const classes = useSocialIconsStyle()

  const handleGoogleAuth = () => {
    dispatch(googleAuthSaga())
  }
  const handleFbAuth = async () => {
    dispatch(fbAuthSaga())
  }

  return (
    <div className={classes.root}>
      <img alt="fb-auth" src={fbSvg} onClick={handleFbAuth} />
      <img alt="google-auth" src={googleSvg} onClick={handleGoogleAuth} />
    </div>
  )
}

SocialIcons.whyDidYouRender = true
export default memo(SocialIcons)
