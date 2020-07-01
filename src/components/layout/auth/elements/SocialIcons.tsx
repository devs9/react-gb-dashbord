import React, {FC, memo} from 'react'
import {useDispatch} from 'react-redux'

import {googleSvg} from '../../../../constants'
import {googleAuthSaga} from '../../../../store/global'

import {useSocialIconsStyle} from './styles'

const SocialIcons: FC = () => {
  const dispatch = useDispatch()
  const classes = useSocialIconsStyle()

  const handleGoogleAuth = () => {
    dispatch(googleAuthSaga())
  }

  return (
    <div className={classes.root}>
      <img alt="google auth" src={googleSvg} onClick={handleGoogleAuth} />
    </div>
  )
}

SocialIcons.whyDidYouRender = true
export default memo(SocialIcons)
