import { configureStore } from "@reduxjs/toolkit";

import globalSliceReducer from "./slices/globalSlice";

const store = configureStore({
  reducer: {
    global: globalSliceReducer,
  },
});

export default store;
