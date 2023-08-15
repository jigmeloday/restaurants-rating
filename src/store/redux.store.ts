import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import { PersistConfig, Persistor, persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { CombinedState, Reducer } from 'redux';
import { AUTH_KEY, authReducer, InitialAuthState } from '../pages/auth/services/auth.slice';
import { PersistPartial } from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';


export interface IReducer {
    [AUTH_KEY]: InitialAuthState;
}

const persistConfig: PersistConfig<IReducer> = {
    key: 'root',
    storage,
    whitelist: [ AUTH_KEY ]
};
const reducers: Reducer<CombinedState<IReducer>> = combineReducers({
    [AUTH_KEY]: authReducer,
});
/*
TODO need to configure
export const isProduction = () => process.env
*/
const persistedReducer: Reducer<IReducer & PersistPartial> = persistReducer(persistConfig, reducers);

export const store: Store = configureStore( {
    reducer: persistedReducer,
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware( {
        serializableCheck: false
    } ),
} )
export const persistor: Persistor = persistStore( store );

export type RootState = ReturnType<typeof store.getState>
