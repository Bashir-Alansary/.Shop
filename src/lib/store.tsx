import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import shopSlice from "./slices/shopSlice";
import globalSlice from "./slices/globalSlice";
import { useDispatch } from "react-redux";



export const store = configureStore({
    reducer: {
      cartSlice: cartSlice,
      shopSlice: shopSlice,
      globalSlice: globalSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 