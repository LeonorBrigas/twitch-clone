import React from 'react';
import RecentItem from './recentItem'
import "./profile.css"

const Profile = () => {
  return (
    <div className="profile">
     <div className="profile--top">
      <div className="profile--topLeft">
        <img src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x0c0c10-no-rj-mo" alt="" />
          <div className="profile_topLeftDetails">
            <h1>cleverprogrammer</h1>
            <h3>816k followers</h3>
          </div>
        </div>
        <div className="profile--topRight">
          <i className="fas fa-heart graybg"></i>
          <i className="fas fa-bell graybg"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
       </div>
        <div className="profile_menu">
          <h2 className="active">Home</h2>
          <h2>About</h2>
          <h2>Schedule</h2>
          <h2>Videos</h2>
          <h2><i className="fas fa-arrow-up"></i></h2>
          <h2>Chat</h2>
        </div>
        <div className="profile_recent">
          <h2>Recent Broadcast</h2>
          <div className="profile_recentItems">
            <RecentItem
              url={'https://www.youtube.com/embed/m9oSZo-TvFI'}
              title={'🔴 How to Earn $1,000 as a Freelance Developer in 30 days'}/>
            <RecentItem
              url={'https://www.youtube.com/embed/PoRJizFvM7s'}
              title={'Async JS Crash Course - Callbacks, Promises, Async Await'}/>
          </div>
          <div className="profile-categories">
            <h2>cleverprogrammer recently streamed Categories</h2>
            <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-144x192.jpg"/>
            <h3>Science & Technology</h3>

          </div>
        </div>
    </div>
  )
}

export default Profile;
