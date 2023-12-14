import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRole: "",
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    selectRole: (state, action) => {
      state.selectedRole = action.payload;
    },
  },
});

export const { selectRole } = roleSlice.actions;
export default roleSlice.reducer;
