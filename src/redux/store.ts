import { configureStore } from '@reduxjs/toolkit';

import productReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    productStore: productReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
