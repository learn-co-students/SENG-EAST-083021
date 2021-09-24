


function Video({embedUrl}) {
  // props = {embedUrl: "https://www.youtube.com/embed/dpw9EHDh2bM"}
  // const {embedUrl} = props

  return (
    <div >
         <iframe
        width="500"
        height="300"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  );
}

export default Video;