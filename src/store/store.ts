import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './localStorage';

import itemsReducer from './features/ListSlice';

const preloadedState = loadState();

const reducers = combineReducers({items: itemsReducer,})

const store = configureStore({
    reducer: reducers,
    preloadedState
});


// Save the state to localStorage every time it changes
store.subscribe(() => {
  saveState(store.getState());
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;



