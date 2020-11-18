import React from 'react';
import Channel from "./channel"
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel avatar="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0xffffffff-no-rj-mo"
        name="cleverprogrammer"
        followers="🔴 816k"/>
        <Channel avatar="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0xffffffff-no-rj-mo"
        name="cleverprogrammer"
        followers="🔴 816k"/>
        <Channel avatar="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0xffffffff-no-rj-mo"
        name="cleverprogrammer"
        followers="🔴 816k"/>
        <h5>RECOMENDED CHANNELS</h5>
        <Channel avatar="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0xffffffff-no-rj-mo"
        name="cleverprogrammer"
        followers="🔴 816k"/>
        <p className="sidebar_topShowMore">Show More</p>
      </div>
      <div className="sidebar_bottom">
        <div className="sidebar_bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to Add Friends"/>
        </div>
      </div>

    </div>
  )
}

export default Sidebar;
