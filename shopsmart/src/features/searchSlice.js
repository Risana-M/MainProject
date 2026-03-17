import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  //The search bar starts empty
  initialState: {
    query: ""
  },
  reducers: {
    setSearchQuery: (state, action) => {//Updates the state as the user types
      state.query = action.payload;
    },
    clearSearch: (state) => {//Resets the query
      state.query = "";
    }
  }
});

export const { setSearchQuery, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;


