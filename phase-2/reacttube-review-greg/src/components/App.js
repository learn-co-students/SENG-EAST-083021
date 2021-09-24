import { useState } from 'react'
import video from "../data/video.js";

import Video from './Video'
import VideoDetails from './VideoDetails'
import Comments from './Comments'

function App() {
  const [videoObj, setVideoObj] = useState(video)
  const [showComments, setShowComments] = useState(true)

  function increment(){
    const newNumber = videoObj.upvotes + 1
    const newStateObject = {...videoObj, upvotes: newNumber}

    setVideoObj(newStateObject)
  }

  function decrement(){
    const newNumber = videoObj.downvotes - 1
    const newStateObject = {...videoObj, downvotes: newNumber}

    setVideoObj(newStateObject)
  }
  

  function toggleComments(){
    setShowComments(showComments => !showComments)
  }

  return (
    <div className="App">
      <Video embedUrl={videoObj.embedUrl}/>
      <VideoDetails 
        views={videoObj.views} 
        createdAt={videoObj.createdAt} 
        title={videoObj.title} 
        upvotes={videoObj.upvotes}
        downvotes={videoObj.downvotes}
        toggleComments={toggleComments}
        increment={increment}
        decrement={decrement}
        />
      {showComments ? <Comments comments={videoObj.comments}/> : null}
      {/* {showComments && <Comments comments={videoObj.comments}/> } */}
    </div>
  );
}

export default App;
