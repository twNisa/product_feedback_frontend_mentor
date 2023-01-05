import {createSlice} from "@reduxjs/toolkit"
import {data} from "./data"

const initialState = data

const feedbacksSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    feedbackAdded:{
      reducer(state, action){
        state.push(action.payload)
      }
    },
    feedbackUpdated(state, action){

    }
  }

})

export const {feedbackAdded, feedbackUpdated} = feedbacksSlice.actions

export default feedbacksSlice.reducer