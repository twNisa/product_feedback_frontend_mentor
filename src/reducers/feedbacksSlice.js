import {createSlice, nanoid,} from "@reduxjs/toolkit"
import {data} from "./data"

const initialState = data

const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    addFeedback:{
      reducer(state, action){
        console.log(state)
        state.productRequests.push(action.payload)
      },
      prepare(feedback){
        return {
          payload:{
            id: nanoid(),
            date: new Date().toISOString(),
            title: feedback.title,
            description: feedback.description,
            category: feedback.category,
            status: feedback.status,
            upvotes: 0,
            upvoted: false,
            comments: "",
          }
        }
      }
    },
    updateFeedback(state, action){

    },
    upvoteFeedback(state, action){
      console.log(action)
      const feedbackToUpvote = state.productRequests.find(feedback => feedback.id === action.payload)
      if(feedbackToUpvote){
        if(feedbackToUpvote.upvoted === false){
          feedbackToUpvote.upvoted = !feedbackToUpvote.upvoted
          feedbackToUpvote.upvotes++
        } else{
          feedbackToUpvote.upvoted = !feedbackToUpvote.upvoted
          feedbackToUpvote.upvotes--
        }
      }
    }
  }

})

export const {addFeedback, updateFeedback, upvoteFeedback} = feedbacksSlice.actions

export default feedbacksSlice.reducer