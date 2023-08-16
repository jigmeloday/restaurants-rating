import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { GetProfile } from './profile.api';


export const PROFILE_KEY = 'profile';

export interface InitialProfileState {
    authModel: boolean
    user: any
}

export const INITIAL_PROFILE_STATE: InitialProfileState = {
    authModel: false,
    user: null

};

export const getProfile =  createAsyncThunk(
    'profile/getProfile',
    async(email: string, thunkAPI) =>{
        return await GetProfile(email);
    }
);



export const profileSlice = createSlice({
    name: 'profile',
    initialState: INITIAL_PROFILE_STATE,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(getProfile.fulfilled, (state: InitialProfileState, action) => {
                state.user = action.payload;
            })
    }
});

export const profileReducer = profileSlice.reducer;
export const getProfileState = (rootState: any): InitialProfileState => rootState[PROFILE_KEY];
export const selectProfile = createSelector(getProfileState, state => state.user);
