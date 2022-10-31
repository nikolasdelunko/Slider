import { configureStore } from "@reduxjs/toolkit";
import helpersSlice from "./helpers";
import cardSlice from "./cards";

export default configureStore({
  reducer: {
    helpers: helpersSlice,
    cards: cardSlice,
  },
});
