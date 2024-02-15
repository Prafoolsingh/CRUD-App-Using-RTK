import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'; // Import Axios library

// Create an async thunk for creating user data in a fake API
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    try {
        // Send a POST request to the fake API with user data
        const response = await axios.post("https://65cc575edd519126b83e47ba.mockapi.io/crud", data);

        // Return the data received from the API
        return response.data;
    } catch (error) {

        // If an error occurs, reject the promise with the error value
        return rejectWithValue(error.response.data);
    }
});

// Create an async thunk for reading user data from an API
export const readUser = createAsyncThunk("readUser", async (_, { rejectWithValue }) => {
    try {

        // Send a GET request to the API to fetch user data
        const response = await axios.get("https://65cc575edd519126b83e47ba.mockapi.io/crud");

        // Return the data received from the API
        return response.data;
    } catch (error) {

        // If an error occurs, reject the promise with the error value
        return rejectWithValue(error.response.data);
    }
});

// Create an async thunk for editing user data in the API 
export const UpdateUser = createAsyncThunk("UpdateUser", async ({ id, data }, { rejectWithValue }) => {
    try {

        // Send a PUT request to the API with the updated user data
        const response = await axios.put(`https://65cc575edd519126b83e47ba.mockapi.io/crud/${id}`, data);

        // Return the data received from the API
        return response.data;
    } catch (error) {

        // If an error occurs, reject the promise with the error value
        return rejectWithValue(error.response.data);
    }
});

// Create an async thunk for deleting user data from the API
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    try {
        // Send a DELETE request to the API to delete the specified user
        const response = await axios.delete(`https://65cc575edd519126b83e47ba.mockapi.io/crud/${id}`);

        // Return the data received from the API
        return response.data;

    } catch (error) {

        // If an error occurs, reject the promise with the error value
        return rejectWithValue(error.response.data);
    }
});

// Define a slice to manage user details state
export const userDetails = createSlice({
    name: "userDetail",
    initialState: {
        user: [],       // Array to hold user data
        loading: false, // Flag to indicate loading state
        error: null,    // Variable to hold error information
    },
    extraReducers: (builder) => {
        builder
            // Reducer for createUser
            .addCase(createUser.pending, (state) => {
                state.loading = true;  // Set loading flag to true
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;              // Set loading flag to false
                state.user.push(action.payload);   // Add created user to user array
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;      // Set loading flag to false
                state.error = action.payload; // Set error information
            })

            // Reducer for readUser
            .addCase(readUser.pending, (state) => {
                state.loading = true;  // Set loading flag to true
            })
            .addCase(readUser.fulfilled, (state, action) => {
                state.loading = false;      // Set loading flag to false
                state.user = action.payload; // Update user array with fetched data
            })
            .addCase(readUser.rejected, (state, action) => {
                state.loading = false;      // Set loading flag to false
                state.error = action.payload; // Set error information
            })

            // Reducer for UpdateUser
            .addCase(UpdateUser.pending, (state) => {
                state.loading = true;  // Set loading flag to true
            })
            .addCase(UpdateUser.fulfilled, (state, action) => {
                state.loading = false;      // Set loading flag to false
                // Update user data in state
                state.user = state.user.map(item =>
                    item.id === action.payload.id ? action.payload : item
                );
            })
            .addCase(UpdateUser.rejected, (state, action) => {
                state.loading = false;      // Set loading flag to false
                state.error = action.payload; // Set error information
            })

            // Reducer for deleteUser
            .addCase(deleteUser.pending, (state) => {

                // Set loading flag to true
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {

                // Set loading flag to false
                state.loading = false;

                // Remove deleted user from user array
                state.user = state.user.filter(item => item.id !== action.payload.id);
            })
            .addCase(deleteUser.rejected, (state, action) => {

                // Set loading flag to false
                state.loading = false;

                // Set error information   
                state.error = action.payload;
            });
    }
});

export default userDetails.reducer;
