import React from 'react'
import Profile from './profile'
import Stream from './stream'

import "./body.css"

const Body = () => {
  return (
    <div className="body">
      <div className="body--left">
        <Stream />
        <Profile />
      </div>
      <div className="body_rightPlaceHolder">
      </div>

    </div>
  )
}

export default Body;
