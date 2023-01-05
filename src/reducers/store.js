import {configureStore } from "@reduxjs/toolkit"
import feedbacksReducer from "./feedbacksSlice"
import filtersReducer from "./filtersSlice"
// import sortsReducer from "./sortsSlice"

export default configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
    filters: filtersReducer,
    // sorts: sortsReducer,
  }
})