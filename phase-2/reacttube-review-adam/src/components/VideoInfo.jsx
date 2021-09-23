import { useState }from 'react'

export default function VideoInfo(props) {
    const [UpVotes, setUpVotes] = useState(props.upVotes)
    const [DownVotes, setDownVotes] = useState(props.downVotes)

    const upVoteHandler = () => {
        setUpVotes((prevUpVotes) => prevUpVotes + 1)
    }

    const downVoteHandler = () => {
        setDownVotes((prevDownVotes) => prevDownVotes + 1)
    }

    return (
        <div>
           <h3>{props.title}</h3>
           <p>Views: {props.viewCount} | Uploaded: {props.uploadDate}</p>
           <button onClick={upVoteHandler}>👍{UpVotes}</button> 
           <button onClick={downVoteHandler}>👎{DownVotes}</button> <br/>
           <button onClick={props.clickHandler}>Show Comments</button>
        </div>
    )
}
