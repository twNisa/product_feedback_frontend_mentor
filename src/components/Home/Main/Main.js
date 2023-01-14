import React from "react";
import {MainContainer, ContentContainer} from "./MainElements"
import { useSelector } from "react-redux";
import Feedbacks from "./Feedbacks"
import feedbacksSlice from "../../../reducers/feedbacksSlice";
import TopBar from "./TopBar"

export default function Main(props){
  const sortOptions = [
    "Most Recent",
    "Least Recent",
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments"
  ]

  const [currentSort, setCurrentSort] = React.useState(0)

  const handleSortSelect = function(id){
    setCurrentSort(id)
  }

  const currentFilter = useSelector((state) => state.filter.filter)
  // const currentSort = useSelect((state) => state.sort)
  const feedbacks = useSelector(state => state.feedbacks.productRequests)

  let filteredFeedbacks;
  currentFilter === "all" ? 
    filteredFeedbacks = feedbacks : 
    filteredFeedbacks = feedbacks.filter(feedback => (feedback.category === currentFilter))

  const suggestionsCount = filteredFeedbacks.length

  let sortedFeedbacks
  if(currentSort === 0){
    sortedFeedbacks = [...filteredFeedbacks].sort((a, b)=>{
      const aD = a.date === undefined ? "0" : a.date
      const bD = b.date === undefined ? "0" : b.date
      return bD.localeCompare(aD)
    })
  } else if(currentSort === 1){
    sortedFeedbacks = [...filteredFeedbacks].sort((a, b)=>{
      const aD = a.date === undefined ? "0" : a.date
      const bD = b.date === undefined ? "0" : b.date
      return aD.localeCompare(bD)
    })
  } else if(currentSort === 2){
    sortedFeedbacks = [...filteredFeedbacks].sort((a, b)=>{
      return b.upvotes - a.upvotes
    })
  } else if(currentSort === 3){
    sortedFeedbacks = [...filteredFeedbacks].sort((a, b)=>{
      return a.upvotes - b.upvotes
    })
  } else if(currentSort === 4){
    sortedFeedbacks = [...filteredFeedbacks].sort((a, b)=>{
      return b.comments.length - a.comments.length
    })
  } else if(currentSort === 5){
    sortedFeedbacks = [...filteredFeedbacks].sort((a, b)=>{
      return a.comments.length - b.comments.length
    })
  }

  return (
    <MainContainer>
      <TopBar count={suggestionsCount} sortOptions={sortOptions} currentSort={currentSort} handleSortSelect={handleSortSelect} />
      <Feedbacks feedbacks={sortedFeedbacks} />
    </MainContainer>
    
  )
}