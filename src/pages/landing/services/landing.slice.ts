import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { CreateListAPI, GetCafe } from './landing.api';


export const LANDING_KEY = 'landing';

export interface InitialLandingState {
    cafe: any
}

export const INITIAL_LANDING_STATE: InitialLandingState = {
   cafe: []

};
export const getCafeList = createAsyncThunk(
    'landing/getCafeList',
    async(_, thunkAPI) =>{
        return await GetCafe();
    }
);

export const postCafeList = createAsyncThunk(
    'landing/postCafeList',
    async(data:any, thunkAPI) =>{
        return await CreateListAPI(data);
    }
);

export const landingSlice = createSlice({
    name: 'landing',
    initialState: INITIAL_LANDING_STATE,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(getCafeList.fulfilled, (state: InitialLandingState, action) => {
                state.cafe = action.payload;
            })
            .addCase(postCafeList.fulfilled, (state, action) => {
               state.cafe = action.payload;
            });
    }
});

export const landingReducer = landingSlice.reducer;
export const getLanding = (rootState: any): InitialLandingState => rootState[LANDING_KEY];
export const selectCafe = createSelector(getLanding, state => state.cafe);
