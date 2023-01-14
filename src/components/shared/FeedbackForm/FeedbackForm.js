import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, TagButton } from "../TagButton"
import { FeedbackFormContainer } from "./FeedbackFormElements"
import formatType from "../../../utils/formatType"
import { SelectWrapper } from "./FeedbackFormElements"
import { FaAngleDown } from "react-icons/fa"
import Dropdown from "../Dropdown/Dropdown"
import { categoryOptions, statusOptions } from "../../../utils/constants"

export default function FeedbackForm({handleFeedbackSubmit, handleFormInputChange, formData, type}){
  const navigate = useNavigate()

  const titleInput = document.querySelector("#titleInput")
  const descInput = document.querySelector("#descInput")

 
  return (
    <FeedbackFormContainer onSubmit={handleFeedbackSubmit}>
          <div>
            <label htmlFor="title">Feedback Title</label>
            <p>Add a short, description headline</p>
            <input
              id="titleInput"
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={(e)=>handleFormInputChange(e)} 
              required
              maxLength="50" 
              placeholder="Feedback Title" 
            />
          </div>

          <div>
            <label htmlFor="category">Feedback Category</label>
            <p>Choose a category for your feedback</p>
           
            <Dropdown 
              dropdownOptions={categoryOptions} 
              currentSelection={formData.category} 
              handleSelection={e => handleFormInputChange(e)} 
              type="category" 
            />
   
          </div>

          <div>
            <label htmlFor="status">Feedback Status</label>
            <p>Choose a status for your feedback</p>
            
            <Dropdown 
              dropdownOptions={statusOptions} 
              currentSelection={formData.status} 
              handleSelection={e => handleFormInputChange(e)}
              type="status"
            />
           
          </div>

          <div>
            <label htmlFor="description">Feedback Description</label>
            <p>Include any specific comments on what should be improved, added etc</p>
            <textarea 
              id="descInput"
              type="text" 
              name="description" 
              value={formData.description} 
              onChange={(e)=>handleFormInputChange(e)} 
              required 
              maxLength="255" 
              placeholder="Feedback Description" 
            />
          </div>

          <div>
            <Button 
              onClick={()=>navigate(-1)}
            >
              Cancel
            </Button>
            <Button primary as="button" type="submit">
              {type=== "add" ? "Add Feedback" : "Edit Feedback" }
            </Button>
          </div>

    </FeedbackFormContainer>
  )
}

