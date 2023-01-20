import React from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { LinkButton } from "../shared/TagButton";
import { TopBarContainer } from "./TopBarElements";
import { BackButtonNavLink } from "../shared/BackButtonNavLink";
export default function TopBar(){
  console.log(useLocation)
  const navigate=useNavigate()
  return (
    <TopBarContainer>
      <div>
        <BackButtonNavLink
          onClick={()=>navigate(-1)}
        >
          <FaAngleLeft />
          <span>Go Back</span>
        </BackButtonNavLink>
        <h2>
          Roadmap
        </h2>
      </div>
      
      <LinkButton
        primary
    
        to="/product_feedback_frontend_mentor/add"
      >
        + Add Feedback
      </LinkButton>
    </TopBarContainer>
  )
} 