import React from 'react'
import './RightSide.css'
import TrendCard from '../TrendCard/TrendCard'
import Home from '../../images/home.png'
import Comment from '../../images/comment.png'
import Notification from '../../images/noti.png'
import { UilSetting } from '@iconscout/react-unicons'
import { useState } from 'react'
import ShareModal from '../ShareModel/ShareModel'


const RightSide = () => {
  const [modalOpened , setModalOpened] = useState(false)
  return (
    <div className="RightSide">
        <div className="navIcons">
            <img src={Home} alt="" />
            <div><UilSetting/></div>
            <img src={Notification} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard/>
        <button className="button r-button" onClick={() => setModalOpened(true)}>
            Share
        </button>
        <ShareModal modalOpened={modalOpened}
            setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide