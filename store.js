import { createSlice } from "@reduxjs/toolkit";

export const store = createSlice({
  name: "store",
  initialState: {
    items: [
      { id: 1, text: "txt1" },
      { id: 2, text: "txt2" },
      { id: 3, text: "txt3" },
    ],
  },
});

export default store.reducer;
