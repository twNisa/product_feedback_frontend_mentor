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
    },
    addComment(state, action){
      console.log(action)
      const feedbackToComment = state.productRequests.find(feedback => feedback.id === action.payload.replyId)
      console.log(feedbackToComment)

      if(feedbackToComment){
        feedbackToComment.comments ? 
          feedbackToComment.comments.push(action.payload.comment)
        : feedbackToComment.comments = [action.payload.comment]
      }
    },
    addReply(state, action){
      console.log(action.payload)
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

export const {addFeedback, updateFeedback, upvoteFeedback, addComment, addReply} = feedbacksSlice.actions

export default feedbacksSlice.reducer