import { loadState, saveState } from './localStorage';

import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './features/ListSlice';

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        items: itemsReducer,
    },
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



