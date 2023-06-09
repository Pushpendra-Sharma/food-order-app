import { configureStore } from '@reduxjs/toolkit';
import restaurantSlice from './features/restaurants/restaurantSlice';
import menuSlice from './features/menu/menuSlice';
import cartSlice from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    menu: menuSlice,
    restaurants: restaurantSlice,
  },
});

export type Action = { type: string; payload: any };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
