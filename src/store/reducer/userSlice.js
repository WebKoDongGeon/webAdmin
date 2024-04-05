import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: '',
        permission: '',
        accessToken: ''
    },
    reducers: {
        user: (state, action) => {
           state.userName = action.payload.userName;
           state.permission = action.payload.permission;
           state.accessToken = action.payload.accessToken;
        }
    }
})

export const { user } = userSlice.actions;

export default userSlice.reducer;