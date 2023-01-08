import React from "react";
import { TopContainer, DropdownMenu } from "./TopBarElements";
import suggestionsIcon from "../../../assets/shared/icon-bulb.svg"
import { TagButton } from "../../shared/TagButton";
import {FaAngleUp} from "react-icons/fa"
import { FaCheck } from "react-icons/fa"
import { useEffect } from "react";

export default function TopBar({count, currentSort, sortOptions, handleSortSelect}){
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  
  function handleDropdownClick(){
    console.log("dropdown clicked")
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
{/* <button 
                value="Most Upvotes" 
                onClick={(e)=> handleDropdownSelection(e)}
              >
                Most Upvotes
              </button> */}

              
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

      <TagButton>+ Add Feedback</TagButton>
    </TopContainer>
  )
}