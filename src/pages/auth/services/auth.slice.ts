import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { Login } from './auth.api';


export const AUTH_KEY = 'auth';

export interface InitialAuthState {
    authModel: boolean
    user: any
}

export const INITIAL_AUTH_STATE: InitialAuthState = {
    authModel: false,
    user: null

};
export const userLogin = createAsyncThunk(
    'auth/userLogIn',
    async(payload: { email: string, password: string }, thunkAPI) =>{
        const res = await Login(payload);
        return res;
    }
);
export const authSlice = createSlice({
    name: 'user',
    initialState: INITIAL_AUTH_STATE,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(userLogin.fulfilled, (state: InitialAuthState, action) => {
                state.user = action.payload;
            })
            // .addCase(logOut, (state, action) => {
            //     state.user = undefined;
            // });
    }
});

export const authReducer = authSlice.reducer;
export const getCredentials = (rootState: any): InitialAuthState => rootState[AUTH_KEY];
export const selectUser = createSelector(getCredentials, state => state.user);
