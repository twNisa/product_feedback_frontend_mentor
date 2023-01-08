import React from "react";
import {RoadmapContainer} from "./RoadmapElements.js"
import TopBar from "../../components/roadmap/TopBar"
import RoadmapTable from "../../components/roadmap/RoadmapTable"
export default function Roadmap(){

  
  return (
    <RoadmapContainer>
      <TopBar />
      <RoadmapTable />
    </RoadmapContainer>
  )
}