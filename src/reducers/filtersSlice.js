import { createSlice } from "@reduxjs/toolkit";

const initialState =  {filter: "all"}

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterSet:{
      reducer(state, action){     
        state.filter = action.payload.filter
      }
    }
  }
})

export const {filterSet} = filtersSlice.actions

export default filtersSlice.reducer