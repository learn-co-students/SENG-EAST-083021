import React from 'react'

export default function Comment({commentData, handleDelete}) {
    const {user, comment} = commentData
    return (
        <div>
           <h3 onClick={() => handleDelete(commentData)}>{user}</h3>
           <p>{comment}</p>
        </div>
    )
}

