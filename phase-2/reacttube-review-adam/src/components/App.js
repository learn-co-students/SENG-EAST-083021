import { useState } from 'react'
import video from "../data/video.js";

//components
import VideoInfo from "./VideoInfo.jsx";
import VideoPlayer from "./VideoPlayer"
import CommentBox from  "./CommentBox"

function App() {
  const [IsVisible, setIsVisible] = useState(true)

  const clickHandler = () => {
    setIsVisible((prevState) => !prevState )
  }

  return (
    <div className="App">
      <VideoPlayer videoUrl={video.embedUrl}/>
      <VideoInfo 
        upVotes={video.upvotes}
        downVotes={video.downvotes}
        title={video.title}
        viewCount={video.views}
        uploadDate={video.createdAt} 
        clickHandler={clickHandler}
      />
     {  IsVisible ? <CommentBox comments={video.comments} /> : null}
    </div>
  );
}

export default App;
