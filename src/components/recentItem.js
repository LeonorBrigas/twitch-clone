import React from 'react'
import "./recentItem.css"


const RecentItem = ({url,title}) => {
  return (
    <div className="item">
      <iframe
      width="400"
      height="235"
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>

    <div className="item-details">
      <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-144x192.jpg" alt="" />
      <div className="item-detailsText">
        <h4>{title}</h4>
        <p>cleverprogrammer</p>
        <p>Science & Technology</p>
      </div>
    </div>
   </div>
  )
}

export default RecentItem;
