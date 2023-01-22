import React from "react";
import { SidebarContainer, TagsContainer, LogoContainer, RoadmapContainer, RoadList, RoadListItem } from "./SidebarElements";
import { TagButton } from "../../shared/TagButton";
import { useDispatch, useSelector } from "react-redux";
import {filterSet} from "../../../reducers/filtersSlice"
import { NavLink } from "react-router-dom";

export default function Sidebar(){

  const feedbacksData = useSelector((state) => state.feedbacks["productRequests"])
  const plannedCount = feedbacksData.filter(item => item.status === "planned").length
  const inProgressCount = feedbacksData.filter(item => item.status === "in-progress").length
  const liveCount = feedbacksData.filter(item => item.status === "live").length
  
  const currentFilter = useSelector((state) => state.filter)
 
  const filters = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"]
  const dispatch = useDispatch()

  const filtersTags = filters.map((filter, index)=>( 
    <li key={index}>
      <TagButton
        data-focus={filter.toLowerCase() === currentFilter.filter}
        onClick={() => {
            dispatch(filterSet({filter: filter.toLowerCase()}))

          }}
      >
        {filter}
      </TagButton>
    </li>
  ))

  return (
    <SidebarContainer>
      <LogoContainer>
        <h2>Frontend mentor</h2>
        <p>Feedback Board</p>
      </LogoContainer>
      <TagsContainer>
        <ul>
          {filtersTags}
        </ul>
      </TagsContainer>
      <RoadmapContainer>
        <div>
          <h2>Roadmap</h2>
          <NavLink to="/product_feedback_frontend_mentor/roadmap" as="button">View</NavLink>
        </div>
        <RoadList>
            <RoadListItem color="Orange" data-count={plannedCount}>
              Planned
            </RoadListItem>
            <RoadListItem color="DarkViolet" data-count={inProgressCount}>
              In-Progress
            </RoadListItem>
            <RoadListItem color="LightSkyBlue" data-count={liveCount}> 
              Live
            </RoadListItem>
        </RoadList>
      </RoadmapContainer>
    </SidebarContainer>
   
  )
}