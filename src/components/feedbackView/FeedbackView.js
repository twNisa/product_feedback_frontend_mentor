import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BackButtonNavLink } from "../shared/BackButtonNavLink";
import { FeedbackViewComments, FeedbackViewCommentsContainer, FeedbackViewContainer,FeedbackViewHeading, FeedbackViewNav, FeedbackViewAddComment } from "./FeedbackViewElements";
import { FaAngleLeft } from "react-icons/fa";
import { Button, LinkButton } from "../shared/TagButton";
import { FeedbackItem } from "./FeedbackViewElements";
import { UpvoteButton } from "../shared/TagButton";
import { TagButton } from "../shared/TagButton";
import { deleteFeedback, upvoteFeedback } from "../../reducers/feedbacksSlice";
import { FaAngleUp } from "react-icons/fa";
import commentsIcon from "../../assets/shared/icon-comments.svg"
import { ReplyButton } from "../shared/TagButton";
import FeedbackViewChildReplyModal from "./FeedbackViewChildReplyModal";
import { FeedbackViewComment } from "./FeedbackViewComment";
import { addComment } from "../../reducers/feedbacksSlice";
import { nanoid } from "@reduxjs/toolkit";
import localUser from "../../utils/localUser";
import { delSuccess } from "../../utils/toasts";

export default function FeedbackView(){
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const feedbackId = location.pathname.replace("/product_feedback_frontend_mentor/feedback/", "")
  const feedbacks = useSelector(store => store.feedbacks.productRequests)
  const currentFeedback = feedbacks.find(feedback => String(feedback.id) === feedbackId)

  function handleUpvoteClick(id){
    dispatch(upvoteFeedback(id))

  }

  // let commentsAmount = 0;
  // currentFeedback.comments.forEach(element => {
  //   commentsAmount += 1
  //   if(element.hasOwnProperty("replies")){
  //     commentsAmount += element.replies.length
  //   }
  // });
  // console.log(commentsAmount)
  const amountOfComments = currentFeedback.comments && currentFeedback.comments ?  
    currentFeedback.comments.reduce((accu, curr) => {
      if (curr.hasOwnProperty("replies")){
        return accu + curr.replies.length+ 1
      } else{
        return accu + 1
      }
    }, 0) 
  : 0

  function handleReplyOpen(e){
    console.log(`replying to id ${e.target.parent}`)
  }


  function getAllComments(){
    const allComments =
    currentFeedback.comments && 
    currentFeedback.comments.map((comment, index) => {
      return <FeedbackViewComment key={comment.id} id={comment.id} comment={comment} parentId={currentFeedback.id} />
    })
    return (
      <FeedbackViewComments>
        {allComments}
      </FeedbackViewComments>

    )
  }

  const [comment, setComment] = React.useState("")

  function handleCommentChange(e){
    setComment(e.target.value)
  }

  function handleCommentButtonClick(){
    if(comment){
      const formatedComment = {
        replyId: currentFeedback.id,
        comment: {
          id: nanoid(),
          content: comment,
          user: localUser,
        }
      }
      dispatch(addComment(formatedComment))
    }
    
    setComment("")

  }
  function handleDelete(id){
    dispatch(deleteFeedback(id))
    delSuccess()
    navigate("/product_feedback_frontend_mentor/")
  }

  return (
    <FeedbackViewContainer>
      <FeedbackViewNav>
        <BackButtonNavLink
          to="/product_feedback_frontend_mentor/"
          lightBg
        >
          <FaAngleLeft />
          <span>Go Back</span>
        </BackButtonNavLink>
        <Button as="button" onClick={()=>handleDelete(feedbackId)}>Delete</Button>
        <LinkButton as="button" to={"/product_feedback_frontend_mentor/feedback/edit/" + feedbackId} >Edit Feedback</LinkButton>
      </FeedbackViewNav>

      
      <FeedbackItem 
          key={feedbackId}
          id={feedbackId}
          
        >
          <UpvoteButton data-upvoted={currentFeedback.upvoted} onClick={()=>handleUpvoteClick(currentFeedback.id)}><FaAngleUp /><span>{currentFeedback.upvotes}</span></UpvoteButton>
          <div className="details">
            <h2>{currentFeedback.title}</h2>
            <p>{currentFeedback.description}</p>
            <TagButton feedback>{currentFeedback.category}</TagButton>
          </div>
          <div className="comments" >
            <img src={commentsIcon}></img>
            {currentFeedback.comments.length}
          </div>
      </FeedbackItem>

      <FeedbackViewCommentsContainer>
        <h2>{amountOfComments === 1 ? "1 Comment" : `${amountOfComments} Comments`}</h2>
        
          {currentFeedback.comments && getAllComments()}
      </FeedbackViewCommentsContainer>

      <FeedbackViewAddComment>
        <h2>Add Comment</h2>
        <textarea name="comment" maxLength={255} value={comment} onChange={(e)=>handleCommentChange(e)} />
        <Button as="button" primary onClick={handleCommentButtonClick}>Post Comment </Button>
      </FeedbackViewAddComment>
    </FeedbackViewContainer>
  )
}