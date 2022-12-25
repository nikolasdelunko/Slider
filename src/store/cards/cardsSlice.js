import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [
    {
      number: 1,
      color: "blue",
      opacity: 100,
      height: 100,
      width: 100,
      title: "",
			colorText: "white",
    },
    {
      number: 2,
      color: "red",
      opacity: 100,
      height: 100,
      width: 100,
			title: "",
			colorText: "white",
    },
    {
      number: 3,
      color: "yellow",
      opacity: 100,
      height: 100,
      width: 100,
			title: "",
			colorText: "white",
    },
    {
      number: 4,
      color: "green",
      opacity: 100,
      height: 100,
      width: 100,
			title: "",
			colorText: "white",
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
              color: action.payload.color,
              opacity: action.payload.opacity,
              height: action.payload.height,
              width: action.payload.width,
							title: action.payload.title,
							colorText: action.payload.colorText,
            });
        });
      }
    },
  },
});

export const { setCard } = helpersSlice.actions;

export default helpersSlice.reducer;
