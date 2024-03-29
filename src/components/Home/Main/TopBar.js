import React from "react";
import { TopContainer, DropdownMenu } from "./TopBarElements";
import suggestionsIcon from "../../../assets/shared/icon-bulb.svg"
import { LinkButton, TagButton } from "../../shared/TagButton";
import {FaAngleUp} from "react-icons/fa"
import { FaCheck } from "react-icons/fa"
import { useEffect } from "react";

export default function TopBar({count, currentSort, sortOptions, handleSortSelect}){
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  
  function handleDropdownClick(){
    setDropdownOpen(prev => !prev)
  }


  function handleDropdownOptionClicked(e){
  
    handleSortSelect(parseInt(e.target.id))
    setDropdownOpen(prev => !prev)
  }

  const DropDown = sortOptions.map((sortOption, index) => (
    <button
      key={index}
      id={index}
      value={sortOption}
      onClick={handleDropdownOptionClicked}
      data-current={index===currentSort}
    >
      {sortOption}
      <span>{index===currentSort && <FaCheck /> }</span>
    </button>
  ))


              
  return (
    <TopContainer>
      <div>
        <div className="suggestions">
          <img src={suggestionsIcon} />
          <h2>{count} {count === 1 ? "Suggestion" : "Suggestions"}</h2>
        </div>

        <div className="sortDropdown">
          <button onClick={handleDropdownClick} >
            Sort by : <span>&nbsp;{sortOptions[currentSort]}&nbsp;</span> 
            <FaAngleUp className="arrow" data-open={dropdownOpen}/>
            </button>
            
          { dropdownOpen && 
            <DropdownMenu>
              {DropDown}
            </DropdownMenu>
          }
        </div>
        
      </div>

      <LinkButton to="/product_feedback_frontend_mentor/add" primary>+ Add Feedback</LinkButton>
    </TopContainer>
  )
}