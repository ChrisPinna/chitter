import React from 'react'
import './Post.css'
import Comment from '../../images/comment.png'
import Share from '../../images/share.png'
import Like from '../../images/like.png'
import NotLike from '../../images/notlike.png'

const Post = ({data}) => {
  return (
    <div className="Post">
        <div className="details">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
        <img src={data.img} alt="" />
        {data.likes} likes
        <div className="postReactions">
            <img src={ data.liked?Like: NotLike } alt="" />
            <img src={ Comment } alt="" />
            <img src={ Share } alt="" />
        </div>
    </div>
  )
}

export default Post