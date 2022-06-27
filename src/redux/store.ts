import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import cardReducer from "./features/cardSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    card: cardReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
