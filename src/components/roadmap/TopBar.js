import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { TagButton } from "../shared/TagButton";
import { TopBarContainer } from "./TopBarElements";

export default function TopBar(){
  return (
    <TopBarContainer>
      <div>
        <NavLink
          to="/"
        >
          <FaAngleLeft />
          <span>Go Back</span>
        </NavLink>
        <h2>
          Roadmap
        </h2>
      </div>
      
      <TagButton>+ Add Feedback</TagButton>
    </TopBarContainer>
  )
} 