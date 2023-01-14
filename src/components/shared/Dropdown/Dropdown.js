import React from "react";
import { DropdownContainer, DropdownMenu, DropdownMenuItem } from "./DropdownElements";
import { FaAngleUp, FaCheck } from "react-icons/fa";
import formatType from "../../../utils/formatType";
export default function Dropdown({dropdownOptions, currentSelection, handleSelection, type}){
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  
  function handleDropdownClick(){
    console.log("dropdown clicked")
    setDropdownOpen(prev => !prev)
  }


  function handleDropdownOptionClicked(e){
    handleSelection(e)
    setDropdownOpen(prev => !prev)
  }


  const DropDownItems = dropdownOptions.map((option, index) => (
    <DropdownMenuItem
      key={index}
      id={index}
      value={option}
      name={type}
      onClick={handleDropdownOptionClicked}
      data-current={dropdownOptions[index]===currentSelection}
      type="button"
    >
      {formatType(option)}
      {dropdownOptions[index]===currentSelection && <FaCheck /> }
    </DropdownMenuItem>
  ))
  return (
    <DropdownContainer>
          <button 
            onClick={handleDropdownClick} 
            data-open={dropdownOpen}
            type="button"  
          >
            {formatType(currentSelection)}
            <FaAngleUp className="arrow" />
          </button>
            
          { dropdownOpen && 
            <DropdownMenu>
              {DropDownItems}
            </DropdownMenu>
          }
    </DropdownContainer>
  )
}