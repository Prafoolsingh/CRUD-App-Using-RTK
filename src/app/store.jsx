import { configureStore } from "@reduxjs/toolkit";
// Importing the userDetailSlice reducer
import userDetails from "../features/userDetailSlice"; 

// Configure the Redux store with the userDetails reducer
export const store = configureStore({
  reducer: {

    // Assigning the userDetails reducer under the 'app' key in the Redux store
    app: userDetails, 
  },
});
