import React from 'react'

import ProfileSide from '../profileSide/ProfileSide'
import PostSide from '../PostSide/PostSide'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <PostSide/>
      <div className="RightSide">RightSide</div>
    </div>
  )
}

export default Home