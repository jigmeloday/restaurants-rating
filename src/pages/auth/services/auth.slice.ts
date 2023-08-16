import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { Login, LogOut, signUp } from './auth.api';


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
        return await Login( payload );
    }
);

export const userLogOut =  createAsyncThunk(
    'auth/userLogOut',
    async(_, thunkAPI) =>{
        return await LogOut();
    }
);

export const userSignUp = createAsyncThunk(
    'auth/userSignUp',
    async(payload: { email:string, password:string }, thunkAPI) =>{
        return await signUp(payload);
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
            .addCase(userLogOut.fulfilled, (state, action) => {
                state.user = undefined;
            })
            .addCase(userSignUp.fulfilled, ( state: InitialAuthState, action ) => {
                state.user = action.payload
            });
    }
});

export const authReducer = authSlice.reducer;
export const getCredentials = (rootState: any): InitialAuthState => rootState[AUTH_KEY];
export const selectUser = createSelector(getCredentials, state => state.user);
