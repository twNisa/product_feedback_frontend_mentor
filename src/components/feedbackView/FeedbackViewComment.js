import React from "react";
import {FeedbackViewCommentItem} from "./FeedbackViewCommentElements"
import { Button } from "../shared/TagButton";
import { CommentItemReply } from "./FeedbackViewCommentElements";
import localUser from "../../utils/localUser";
import { useDispatch } from "react-redux";
import { addReply } from "../../reducers/feedbacksSlice";

function CommentReply({reply, handleReplyChange, postReply}) {
  // console.log(reply)
  return (
    <CommentItemReply key={reply.id} > 
      <textarea name="comment" maxLength={255} value={reply} onChange={(e)=>handleReplyChange(e)}/>
      <Button as="button" primary onClick={postReply}>Post Reply </Button>
    </CommentItemReply>
  )
}

export function FeedbackViewComment({comment, parentId}){
  const dispatch = useDispatch()

  const [reply, setReply] = React.useState("")
  const [isReplyOpen, setIsReplyOpen] = React.useState(false)

  function handleReplyChange(e){
    setReply(e.target.value)
  }

  function handleReplyToggle(){
    setIsReplyOpen(prev => !prev)
  }

  function postReply(){
    if(reply){
      const formatedComment = {
        parentId: parentId,
        commentId: comment.id,
        replyContent: {
          content: reply,
          replyingTo: comment.user.username,
          user: localUser,
        }
      }
      dispatch(addReply(formatedComment))
    }
    handleReplyToggle()
    setReply("")
  }

  return (
    <FeedbackViewCommentItem data-children={comment.replies ? "true" : "false"}>
      <img alt={comment.user.name} src={process.env.PUBLIC_URL + `/${comment.user.image}`}/>
      <div className="user-comment">
        <div className="user-header"> 
          <div className="user-name">
            <h4>{comment.user.name}</h4>
            <p>@{comment.user.username}</p> 
          </div>
          <button isReplyOpen onClick={(e) => handleReplyToggle(e)}>{isReplyOpen ? "Cancel" : "Reply"}</button>  
        </div> 
        <p>{comment.content}</p>
        {isReplyOpen && <CommentReply key={comment.id} reply={reply} handleReplyChange={handleReplyChange} postReply={postReply}/> }

        {comment.replies && <ChildComments replies={comment.replies} parentId={parentId} commentId={comment.id} />}
      </div>
    </FeedbackViewCommentItem>
  )
}

function ChildComments({replies, parentId, commentId}){
  const allReplies = replies.map(reply => <FeedbackChildComment key={reply.id} comment={reply} parentId={parentId} commentId={commentId}/> )
  return allReplies
}


function FeedbackChildComment({comment, parentId, commentId}){
  const dispatch= useDispatch()

  const [reply, setReply] = React.useState("")
  const [isReplyOpen, setIsReplyOpen] = React.useState(false)

  function handleReplyChange(e){
    setReply(e.target.value)
  }

  function handleReplyToggle(){
    setIsReplyOpen(prev => !prev)
  }

  function postReply(){
    if(reply){
      const formatedComment = {
        parentId: parentId,
        commentId: commentId,
        replyContent: {
          content: reply,
          replyingTo: comment.user.username,
          user: localUser,
        }
      } 
      dispatch(addReply(formatedComment))

    } 
    handleReplyToggle()
    setReply("")
  }

  return (
    <FeedbackViewCommentItem >
      <img alt={comment.user.name} src={process.env.PUBLIC_URL + `/${comment.user.image}`}/>
      <div className="user-comment">
        <div className="user-header"> 
          <div className="user-name">
            <h4>{comment.user.name}</h4>
            <p>@{comment.user.username}</p> 
          </div>
          <button data-active={isReplyOpen.toString()} onClick={(e) => handleReplyToggle(e)}>{isReplyOpen ? "Cancel" : "Reply"}</button>  
        </div> 
        <p>{comment.content}</p>
        {isReplyOpen && <CommentReply key={comment.id} reply={reply} handleReplyChange={handleReplyChange} postReply={postReply}/> }

        {comment.replies && <ChildComments replies={comment.replies} />}
      </div>
    </FeedbackViewCommentItem>
  )
}

