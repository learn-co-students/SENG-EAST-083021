


function VideoDetails({views, upvotes, downvotes, createdAt, title, toggleComments, increment, decrement}) {
  

  return (
    <div >
      <h2>{title}</h2>
      <p>Views: {views}</p>
      <p>Created At: {createdAt}</p>

      <button onClick={increment}>upvote: {upvotes}</button>
      <button onClick={decrement}>downvote: {downvotes}</button>
      <br />

      <button onClick={toggleComments}> Hide Comments</button>
      <hr />
    </div>
  );
}

export default VideoDetails;