import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";

// Redux store for state management
const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store;