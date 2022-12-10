import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [{
		number: 1,
		color:  "blue",
		opacity: 100,
	},
	{
		number: 2,
		color:  "red",
		opacity: 100,
	},
	{
		number: 3,
		color:  "yellow",
		opacity: 100,
	},
	{
		number: 4,
		color:  "green",
		opacity: 100,
	},
],
};

const helpersSlice = createSlice({
  name: "helpers",
  initialState,
  reducers: {
    setCard(state, action) {
      const findCard = state.card.find(
        (el) => el.number === action.payload.number
      );
      if (!findCard) {
        state.card = [...state.card, action.payload];
      } else {
        state.card.forEach(function (el, i) {
          if (el.number === action.payload.number)
            state.card.splice(i, 1, {
              number: action.payload.number,
							color:  action.payload.color,
							opacity: action.payload.opacity,
            });
        });
      }
    },
  },
});

export const { setCard } = helpersSlice.actions;

export default helpersSlice.reducer;
