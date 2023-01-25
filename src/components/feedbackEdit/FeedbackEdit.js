import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import {FeedbackEditContainer, FeedbackEditFormContainer, FeedbackEditForm} from "./FeedbackEditElements"
import { BackButtonNavLink } from "../shared/BackButtonNavLink";
import React from "react";
import { TagButton } from "../shared/TagButton";
import FeedbackForm from "../shared/FeedbackForm/FeedbackForm";
import {useDispatch, useSelector } from "react-redux"
import feedbacksSlice from "../../reducers/feedbacksSlice";
import { editFeedback } from "../../reducers/feedbacksSlice";
import { editSuccess } from "../../utils/toasts";

export default function FeedbackEdit(){
  const feedbacks = useSelector(state => state.feedbacks.productRequests)
  const location = useLocation()
  const feedbackId =  location.pathname.replace("/product_feedback_frontend_mentor/feedback/edit/", "")
  const feedback = feedbacks.find(fb => String(fb.id) === feedbackId)


  const [newFeedback, setNewFeedback] = React.useState(feedback)
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

  const dispatch = useDispatch()

  function handleFeedbackEditSubmit(e){
    e.preventDefault()
    dispatch(
      editFeedback(newFeedback)
    )
    navigate("/product_feedback_frontend_mentor/feedback/" + feedbackId)
    editSuccess()
  }

  const navigate = useNavigate()

  return (
    <FeedbackEditContainer>
      <BackButtonNavLink
        onClick={()=>navigate(-1)}
        lightBg
      >
        <FaAngleLeft />
        <span>Go Back</span>
      </BackButtonNavLink>
      <FeedbackEditFormContainer>
        <h2>Edit Feedback</h2>
        {/* <FeedbackEditForm onSubmit={handleFeedbackEditSubmit}>
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

        </FeedbackEditForm> */}
          <FeedbackForm 
            handleFormInputChange={handleFormInputChange} 
            handleFeedbackSubmit={handleFeedbackEditSubmit} 
            formData={newFeedback} 
            type="edit"
          />
      </FeedbackEditFormContainer>
    </FeedbackEditContainer>
  )


}
