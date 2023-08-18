import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { CreateListAPI, GetCafe, VisitedCafe } from './landing.api';


export const LANDING_KEY = 'landing';

export interface InitialLandingState {
    cafe: any
    visited: any
    loading: 'init' | 'pending' | 'loaded'
}

export const INITIAL_LANDING_STATE: InitialLandingState = {
   cafe: [],
    visited: [],
    loading: 'init'
};
export const getCafeList = createAsyncThunk(
    'landing/getCafeList',
    async ( _, thunkAPI ) => {
        return await GetCafe();
    }
);
export const visitedList = createAsyncThunk(
    'landing/visitedList',
    async(_, thunkAPI) =>{
        return await VisitedCafe();
    }
);

export const postCafeList = createAsyncThunk(
    'landing/postCafeList',
    async ( data: any, thunkAPI ) => {
        return await CreateListAPI( data );
    }
);

export const landingSlice = createSlice( {
    name: 'landing',
    initialState: INITIAL_LANDING_STATE,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase( getCafeList.fulfilled, ( state: InitialLandingState, action ) => {
                state.cafe = action.payload;
            } )
            .addCase( postCafeList.fulfilled, ( state, action ) => {
                state.cafe = action.payload;
                state.loading = 'loaded';

            } )
            .addCase(visitedList.fulfilled, (state: InitialLandingState, action) => {
                state.visited = action.payload;
            })
            .addCase( postCafeList.pending, ( state ) => {
                state.loading = 'pending';
            } )
        ;
    }
} );

export const landingReducer = landingSlice.reducer;
export const getLanding = ( rootState: any ): InitialLandingState => rootState[ LANDING_KEY ];
export const selectCafe = createSelector( getLanding, state => state.cafe );
export const selectLoading = createSelector( getLanding, state => state.loading );
export const selectVisitedCafe = createSelector(getLanding, state => state.visited);
