import React from "react";
import { useSelector } from "react-redux";
import {RoadmapTableContainer, RoadmapItem, RoadmapCategoryContainer, RoadmapCategoryTitle, RoadmapItemsContainer, RoadmapItemDetail, RoadmapSocials} from "./RoadmapTableElements"
import {TagButton, HorizontalUpvoteButton} from "../../components/shared/TagButton"
import { FaAngleUp } from "react-icons/fa";
import commentsIcon from "../../assets/shared/icon-comments.svg"

export default function RoadmapTable(){

  const feedbacksData = useSelector((state) => state.feedbacks["productRequests"])

  const categories = [
    {
      type: "planned",
      desc: "Ideas priotised for research",
      color: "Orange",
    },
    {
      type: "in-progress",
      desc: "Currently being developed",
      color: "DarkViolet",
    },
    {
      type: "live",
      desc: "Released features",
      color: "LightSkyBlue"
    }
  ]
  
  function formatType(type){
    const words = type.split("-")
    return words.map(word => (word[0].toUpperCase() + word.slice(1))).join("-")
  }

  const roadmapItems = categories.map((category, index) => {
    const categoryFeedbacks = feedbacksData.filter(item => item.status === category.type)

    return (
      <RoadmapCategoryContainer key={index} >
        <RoadmapCategoryTitle>
          <h2>{formatType(category.type)} ({categoryFeedbacks.length})</h2>
          <p>{category.desc}</p>
        </RoadmapCategoryTitle>
        <RoadmapItemsContainer>
          {categoryFeedbacks.map((item, index)=>(
            <RoadmapItem type={item.status} key={index} color={category.color}>
              <RoadmapItemDetail color={category.color}>
                <span className="status" >{item.status}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <TagButton feedback>{item.category}</TagButton>
              </RoadmapItemDetail>
              
              <RoadmapSocials>
                <HorizontalUpvoteButton><FaAngleUp /> <span>{item.upvotes}</span></HorizontalUpvoteButton>
                <div className="comments">
                  <img src={commentsIcon} alt="comments"></img>
                  {item.comments.length}
                </div>
              </RoadmapSocials>
            </RoadmapItem>
          ))}
        </RoadmapItemsContainer>
      </RoadmapCategoryContainer>
    )
  })


  return (
    <RoadmapTableContainer>
      {roadmapItems}
    </RoadmapTableContainer>
  )
}