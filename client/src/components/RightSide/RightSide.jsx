import React from 'react'
import './RightSide.css'
import TrendCard from '../TrendCard/TrendCard'
import Home from '../../images/home.png'
import Comment from '../../images/comment.png'
import Notification from '../../images/noti.png'
import { UilSetting } from '@iconscout/react-unicons'


const RightSide = () => {
  return (
    <div className="RightSide">
        <div className="navIcons">
            <img src={Home} alt="" />
            <div><UilSetting/></div>
            <img src={Notification} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard/>
        <button className="button r-button">
            Share
        </button>
    </div>
  )
}

export default RightSide