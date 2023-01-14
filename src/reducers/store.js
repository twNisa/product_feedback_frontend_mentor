import {configureStore } from "@reduxjs/toolkit"
import feedbacksReducer from "./feedbacksSlice"
import filtersReducer from "./filtersSlice"
import { loadLocalStorage } from "../utils/localStorage"
// import sortsReducer from "./sortsSlice"

const preloadedState = loadLocalStorage()
export default configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
    filter: filtersReducer,
    // sorts: sortsReducer,
  },
  preloadedState,
})