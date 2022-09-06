import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {

    const [modalOpened , setModalOpened] = useState(false)
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <UilPen className='UilPen' heigth='2rem' width='1.2rem' onClick={() => setModalOpened(true)}/>
            <ProfileModal modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            />
        </div>
        <div className="info">
            <span>
                <b>Status</b>
            </span>
            <span className="detail">Single</span>
        </div>
        <div className="info">
            <span>
                <b>Lives</b>
            </span>
            <span className="detail">London</span>
        </div>
        <div className="info">
            <span>
                <b>Works at</b>
            </span>
            <span className="detail">Unempoyed</span>
        </div>
        <button className="button logout-button">Log out</button>
    </div>
  )
}

export default InfoCard