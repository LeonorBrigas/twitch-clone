import React from 'react';
import "./channel.css";

const Channel = ({avatar, name, followers }) => {
  return (
    <div className="channel">
      <div className="channel_details">
          <img src={avatar} alt="" />
          <p>{name}</p>
      </div>
        <p>{followers}</p>
    </div>
  )
}

export default Channel;
