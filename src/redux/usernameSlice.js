/* Logic */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

export const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setReduxUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setReduxUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
