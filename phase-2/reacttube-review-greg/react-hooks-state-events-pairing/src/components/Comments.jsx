import Comment from './Comment'


function Comments({comments}) {
  
  const commentList = comments.map(commentObj => <Comment key={commentObj.id} comment={commentObj.comment} />)

  return (
    <div >
      {commentList}
    </div>
  );
}

export default Comments;