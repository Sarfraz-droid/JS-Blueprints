import { configureStore } from "@reduxjs/toolkit";
import NodeReducer from "./features/Node.slice";
import EdgeReducer from "./features/edge.slice";
import ActiveNodeReducer from "./features/activeNode.slice";
import ProjectIdReducer from "./features/projectId.slice";
import thunkMiddleware from "redux-thunk";

export const store = configureStore({
  reducer: {
    nodes: NodeReducer,
    edges: EdgeReducer,
    activeNode: ActiveNodeReducer,
    projectId: ProjectIdReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
