import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { GetCafe, VisitedCafe } from './landing.api';


export const LANDING_KEY = 'landing';

export interface InitialLandingState {
    cafe: any
    visited: any
}

export const INITIAL_LANDING_STATE: InitialLandingState = {
   cafe: [],
    visited: []
};
export const getCafeList = createAsyncThunk(
    'landing/getCafeList',
    async(_, thunkAPI) =>{
        return await GetCafe();
    }
);

export const visitedList = createAsyncThunk(
    'landing/visitedList',
    async(_, thunkAPI) =>{
        return await VisitedCafe();
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
            .addCase(visitedList.fulfilled, (state: InitialLandingState, action) => {
                state.visited = action.payload;
            })
        ;

    }
});

export const landingReducer = landingSlice.reducer;
export const getLanding = (rootState: any): InitialLandingState => rootState[LANDING_KEY];
export const selectCafe = createSelector(getLanding, state => state.cafe);
export const selectVisitedCafe = createSelector(getLanding, state => state.visited);
