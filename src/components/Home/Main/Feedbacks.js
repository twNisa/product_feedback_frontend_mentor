import React from "react";
import { useSelector } from "react-redux";
import {ContentContainer, FeedbackItem} from "./FeedbacksElements.js"
import { TagButton, UpvoteButton } from "../../shared/TagButton";
import commentsIcon from "../../../assets/shared/icon-comments.svg"
import {FaAngleUp} from "react-icons/fa"

export default function Feedbacks({feedbacks}){
  const feedbackItems = feedbacks.map((feedback) => (
    <FeedbackItem 
      key={feedback.id}
      id={feedback.id}
    >
      <UpvoteButton><FaAngleUp /><span>{feedback.upvotes}</span></UpvoteButton>
      <div className="details">
        <h2>{feedback.title}</h2>
        <p>{feedback.description}</p>
        <TagButton feedback>{feedback.category}</TagButton>
      </div>
      <div className="comments">
        <img src={commentsIcon}></img>
        {feedback.comments.length}
      </div>
    </FeedbackItem>
  ))

  console.log(feedbackItems)
  return (
    <ContentContainer>
      {feedbackItems}
    </ContentContainer>
  )
}