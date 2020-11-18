import React from 'react'
import "./stream.css"

const stream = () => {
  return (
    <div className="stream">
      <div className="stream--container">
        <div className="stream--status">
          <div className="stream--statusContainer">
          <div className="stream--statusContainerTop">
            <div className="stream--statusIndicator">OFFLINE</div>
            <h2>Check out the below streams from Clever Programmer</h2>
          </div>
          <div className="stream--statusInfo">
            <i className="fas fa-bell"></i>
            <p>You will be notified when clever programmer is live</p>
          </div>
        </div>
      </div>
      <div className="stream-videoEmbed">
        <iframe
          width="500"
          height="295"
          src="https://www.youtube.com/embed/gLNIVdtaW3A"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
  )
}

export default stream;
