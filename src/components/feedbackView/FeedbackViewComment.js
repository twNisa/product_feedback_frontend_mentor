import React from "react";
import {FeedbackViewCommentItem} from "./FeedbackViewCommentElements"
import { Button } from "../shared/TagButton";
import { CommentItemReply } from "./FeedbackViewCommentElements";

function CommentReply({reply, handleReplyChange, postReply}) {
  // console.log(reply)
  return (
    <CommentItemReply key={reply.id} > 
      <textarea name="comment" maxLength={255} value={reply} onChange={(e)=>handleReplyChange(e)}/>
      <Button as="button" primary onClick={postReply}>Post Reply </Button>
    </CommentItemReply>
  )
}

function FeedbackComment({comment}){
  const [reply, setReply] = React.useState("")
  const [isReplyOpen, setIsReplyOpen] = React.useState(false)

  function handleReplyChange(e){
    setReply(e.target.value)
  }

  function handleReplyToggle(){
    setIsReplyOpen(prev => !prev)
  }

  function postReply(){
    console.log(comment)
    
    handleReplyToggle()
    setReply("")
  }

  return (
    <FeedbackViewCommentItem>
      <img alt={comment.user.name} src={process.env.PUBLIC_URL + `.${comment.user.image}`}/>
      <div className="user-comment">
        <div className="user-header"> 
          <div className="user-name">
            <h4>{comment.user.name}</h4>
            <p>@{comment.user.username}</p> 
          </div>
          <button active={isReplyOpen.toString()} onClick={(e) => handleReplyToggle(e)}>{isReplyOpen ? "Cancel" : "Reply"}</button>  
        </div> 
        <p>{comment.content}</p>
        {isReplyOpen && <CommentReply key={comment.id} reply={reply} handleReplyChange={handleReplyChange} postReply={postReply}/> }

        {comment.replies && <ChildComments replies={comment.replies} />}
      </div>
    </FeedbackViewCommentItem>
  )
}

function ChildComments({replies}){
  console.log(replies)
  const allReplies = replies.map(reply => <FeedbackComment comment={reply} /> )

  return allReplies
  // const allReplies=replies.map(comment => {
    
  //   return (
  //     <FeedbackViewCommentItem>
  //       <img alt={comment.user.name} src={process.env.PUBLIC_URL + `.${comment.user.image}`}/>
  //       <div className="user-comment">
  //         <div className="user-header"> 
  //           <div className="user-name">
  //             <h4>{comment.user.name}</h4>
  //             <p>@{comment.user.username}</p> 
  //           </div>
  //           <button active={isReplyOpen.toString()} onClick={(e) => handleReplyToggle(e)}>{isReplyOpen ? "Cancel" : "Reply"}</button>  
  //         </div> 
  //         <p>{comment.content}</p>
  //         {isReplyOpen && <CommentReply key={comment.id} reply={reply} handleReplyChange={handleReplyChange} postReply={postReply}/> }
  //       </div>
  //     </FeedbackViewCommentItem>
  //   )
  //   })

  //   return allReplies
  
}

export function FeedbackViewComment({comment}){
  const [reply, setReply] = React.useState("")
  const [isReplyOpen, setIsReplyOpen] = React.useState(false)

  function handleReplyChange(e){
    setReply(e.target.value)
  }

  function handleReplyToggle(){
    setIsReplyOpen(prev => !prev)
  }

  function postReply(){
    console.log(comment)
    
    handleReplyToggle()
    setReply("")
  }

  return (
    <FeedbackViewCommentItem data-children={comment.replies ? "true" : "false"}>
      <img alt={comment.user.name} src={process.env.PUBLIC_URL + `.${comment.user.image}`}/>
      <div className="user-comment">
        <div className="user-header"> 
          <div className="user-name">
            <h4>{comment.user.name}</h4>
            <p>@{comment.user.username}</p> 
          </div>
          <button active={isReplyOpen.toString()} onClick={(e) => handleReplyToggle(e)}>{isReplyOpen ? "Cancel" : "Reply"}</button>  
        </div> 
        <p>{comment.content}</p>
        {isReplyOpen && <CommentReply key={comment.id} reply={reply} handleReplyChange={handleReplyChange} postReply={postReply}/> }

        {comment.replies && <ChildComments replies={comment.replies} />}
      </div>
    </FeedbackViewCommentItem>
  )
}


