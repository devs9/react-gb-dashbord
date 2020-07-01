import React from 'react'

if (process.env.NODE_ENV === 'development') {
  const ReactRedux = require('react-redux/lib')
  const whyDidYouRender = require('@welldone-software/why-did-you-render')

  whyDidYouRender(React, {
    titleColor: 'green',
    diffNameColor: 'darkturquoise',
    trackAllPureComponents: true,
    trackExtraHooks: [[ReactRedux, 'useSelector']]
  })
}
