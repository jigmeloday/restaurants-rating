import { createAction } from '@reduxjs/toolkit';

export const setCafe = createAction( 'cafe', args => ( { payload: args } ) );
