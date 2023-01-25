import {createSlice, nanoid,} from "@reduxjs/toolkit"
import { delSuccess } from "../utils/toasts"
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
    editFeedback(state, action){
      const feedbackToEdit = state.productRequests.find(feedback => String(feedback.id) === String(action.payload.id))
      if(feedbackToEdit){
        const result = state.productRequests.map(feedback => {
          if(String(feedback.id) === String(action.payload.id)){
            return action.payload
          } else{
            return feedback
          }
        })
        return {productRequests: result}
      }
    },
    deleteFeedback(state, action){
      const feedbackTarget = state.productRequests.find(feedback => String(feedback.id) === String(action.payload))
      if(feedbackTarget){
        const result = state.productRequests.filter(feedback => String(feedback.id) !== String(action.payload))
        return {productRequests: result}
      } 

    },
    upvoteFeedback(state, action){
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
    },
    addComment(state, action){
      const feedbackToComment = state.productRequests.find(feedback => feedback.id === action.payload.replyId)

      if(feedbackToComment){
        feedbackToComment.comments ? 
          feedbackToComment.comments.push(action.payload.comment)
        : feedbackToComment.comments = [action.payload.comment]
      }
    },
    addReply(state, action){
      const feedbackToComment = state.productRequests.find(feedback => feedback.id === action.payload.parentId)
      const commentToReply = feedbackToComment.comments.find(comment => comment.id === action.payload.commentId)

      if(commentToReply.replies){
        commentToReply.replies.push(action.payload.replyContent)
      } else{
        commentToReply.replies = [action.payload.replyContent]
      }
    }
    

  }

})

export const {addFeedback, editFeedback, deleteFeedback, upvoteFeedback, addComment, addReply} = feedbacksSlice.actions

export default feedbacksSlice.reducer