import React, {useState, useRef} from 'react'
import profileImage from '../../images/profileImg.jpg'
import './PostShare.css'
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"

const PostShare = () => {
    const [image, SetImage] = useState(null)
    const imageRef = useRef()

    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            SetImage({
                image: URL.createObjectURL(img)
            })
        }
    }
  return (
    <div className="PostShare">
        <img src={profileImage} alt="" />
        <div>
            <input type="text" placeholder="What's happening?"/>
            <div className="postOptions">
                <div className="option" style={{color: "var(--photo)"}} onClick={() => imageRef.current.click()}>
                    <UilScenery/>
                    Photo
                </div>
                <div className="option" style={{color: "var(--video)"}}>
                    <UilPlayCircle/>
                    Video
                </div>
                <div className="option" style={{color: "var(--location)"}}>
                    <UilLocationPoint/>
                    Location
                </div>
                <div className="option" style={{color: "var(--shedule)"}}>
                    <UilSchedule/>
                    Date
                </div>
                <button className='button ps-button'>
                    Share
                </button>
                <div style={{display: "none"}}>
                    <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
                </div>
            </div>
            {image && (
                <div className="previewImage">
                    <UilTimes onClick={() => SetImage(null)}/>
                    <img src={image.image} alt="" />
                </div>
            )}
        </div>
    </div>
  )
}

export default PostShare