import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {ContentContainer, FeedbackItem} from "./FeedbacksElements.js"
import { TagButton, UpvoteButton } from "../../shared/TagButton";
import commentsIcon from "../../../assets/shared/icon-comments.svg"
import {FaAngleUp} from "react-icons/fa"
import {upvoteFeedback} from "../../../reducers/feedbacksSlice"
import { useNavigate } from "react-router-dom";

export default function Feedbacks({feedbacks}){
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleUpvoteClick(id){
    console.log(`upvote ${id}`)
    dispatch(upvoteFeedback(id))

  }
  function routeToView(id){
    let path = `/feedback/${id}`
    navigate(path)
  }

  const feedbackItems = feedbacks.map((feedback) => (
    <FeedbackItem 
      key={feedback.id}
      id={feedback.id}
    >
      <UpvoteButton onClick={()=>handleUpvoteClick(feedback.id)}><FaAngleUp /><span>{feedback.upvotes}</span></UpvoteButton>
      <div className="details" onClick={() => routeToView(feedback.id)}>
        <h2>{feedback.title}</h2>
        <p>{feedback.description}</p>
        <TagButton feedback>{feedback.category}</TagButton>
      </div>
      <div className="comments" onClick={() => routeToView(feedback.id)}>
        <img src={commentsIcon}></img>
        {feedback.comments.length}
      </div>
    </FeedbackItem>
  ))

  return (
    <ContentContainer>
      {feedbackItems}
    </ContentContainer>
  )
}