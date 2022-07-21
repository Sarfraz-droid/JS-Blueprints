import { configureStore } from "@reduxjs/toolkit";
import NodeReducer from "./features/NodeSlice";
import EdgeReducer from "./features/edgeSlice";
import ActiveNodeReducer from "./features/activeNodeSlice";
import thunkMiddleware from "redux-thunk";

export const store = configureStore({
  reducer: {
    nodes: NodeReducer,
    edges: EdgeReducer,
    activeNode: ActiveNodeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
