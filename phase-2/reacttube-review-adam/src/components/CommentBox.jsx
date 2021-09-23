import { useState } from 'react'
import Comment from './Comment'

const CommentBox = (props) => {
    const [comments, setComments] = useState(props.comments)

    const handleDelete = (clickedComment) => {
        
        //take it and "FILTER" it out of the "comments" piece of state
        // If the comment in the current iteratation is NOT the comment I clicked
        // I want to keep that comment
        
        setComments((prevArray) => prevArray.filter((cmntObj) => cmntObj.id !== clickedComment.id))

    }


    return (
        <div>
            <h3>{comments.length} Comments</h3>
            {comments.map((commentObj) => <Comment handleDelete={handleDelete} key={commentObj.id} commentData={commentObj} />)}
        </div>
    )
}

export default CommentBox
