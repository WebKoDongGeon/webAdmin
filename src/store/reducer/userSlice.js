import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        permission: '',
        accessToken: ''
    },
    reducers: (state, action) => {
        state.username = action.payload.username;
        state.permission = action.payload.permission;
        state.accessToken = action.payload.accessToken;

    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;