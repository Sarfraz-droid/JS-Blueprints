import { configureStore } from "@reduxjs/toolkit";
import NodeReducer from "./features/node.slice";
import EdgeReducer from "./features/edge.slice";
import ActiveReducer from "./features/active.slice";
import ProjectIdReducer from "./features/projectId.slice";
import variablesReducer from "./features/variables.slice";
import thunkMiddleware from "redux-thunk";

export const store = configureStore({
  reducer: {
    nodes: NodeReducer,
    edges: EdgeReducer,
    active: ActiveReducer,
    projectId: ProjectIdReducer,
    variables: variablesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
