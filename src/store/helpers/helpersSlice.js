import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: null,
	page: 1,
};

const helpersSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    openModal(state, action) {
      state.modal = action.payload;
    },
		setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const {
  openModal,
	setPage,
} = helpersSlice.actions;

export default helpersSlice.reducer;
