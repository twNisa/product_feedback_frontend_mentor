import { NavLink, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import {FeedbackAddContainer, FeedbackAddFormContainer, FeedbackAddForm} from "./FeedbackAddElements"
import { BackButtonNavLink } from "../shared/BackButtonNavLink";
import React from "react";
import { TagButton } from "../shared/TagButton";
import FeedbackForm from "../shared/FeedbackForm/FeedbackForm";
import {useDispatch, useSelector } from "react-redux"
import feedbacksSlice from "../../reducers/feedbacksSlice";
import { addFeedback } from "../../reducers/feedbacksSlice";
import { addSuccess, feedbackExists } from "../../utils/toasts";

export default function FeedbackAdd(){
  const [newFeedback, setNewFeedback] = React.useState({
    title: "",
    description: "",
    category: "feature",
    status: "suggestion",
  })

  function handleFormInputChange(event){
    const name = event.target.name
    const value = event.target.value
    setNewFeedback(prev => (
      {
        ...prev, 
        [name]: value,
      }
    ))
  }

  const feedbacks = useSelector(state => state.feedbacks.productRequests)

  const dispatch = useDispatch()

  function handleFeedbackAddSubmit(e){
    e.preventDefault()

    //check if feedback already exists in store
    if(feedbacks.find(feedback => feedback.title === newFeedback.title)){
      //already exists
      feedbackExists()
    } else{
      dispatch(
        addFeedback(newFeedback)
      )
      navigate("/product_feedback_frontend_mentor/")
      addSuccess()
    }


  }

  const navigate = useNavigate()

  return (
    <FeedbackAddContainer>
      <BackButtonNavLink
        onClick={()=>navigate(-1)}
        lightBg
      >
        <FaAngleLeft />
        <span>Go Back</span>
      </BackButtonNavLink>
      <FeedbackAddFormContainer>
        <h2>Create New Feedback</h2>
        {/* <FeedbackAddForm onSubmit={handleFeedbackAddSubmit}>
          <div>
            <label for="title">Feedback Title</label>
            <p>Add a short, description headline</p>
            <input type="text" name="title" value={newFeedback.title} onChange={handleFormInputChange} required maxLength="50" placeholder="Feedback Title" />
          </div>
          <div>
            <label for="category">Feedback Category</label>
            <p>Choose a category for your feedback</p>
            <input type="text" name="category" value={newFeedback.category} onChange={handleFormInputChange} required defaultValue={0} />
          </div>
          <div>
            <label for="status">Feedback Status</label>
            <p>Choose a status for your feedback</p>
            <input type="text" name="status" value={newFeedback.status} onChange={handleFormInputChange} required defaultValue={0} />
          </div>
          <div>
            <label for="description">Feedback Description</label>
            <p>Include any specific comments on what should be improved, added etc</p>
            <textarea type="text" name="description" value={newFeedback.description} onChange={handleFormInputChange} required maxLength="255" placeholder="Feedback Description" />
          </div>
          <div>
            <TagButton></TagButton>
          </div>

        </FeedbackAddForm> */}
          <FeedbackForm 
            handleFormInputChange={handleFormInputChange} 
            handleFeedbackSubmit={handleFeedbackAddSubmit} 
            formData={newFeedback} 
            type="add"
          />
      </FeedbackAddFormContainer>
    </FeedbackAddContainer>
  )


}
