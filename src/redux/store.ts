import { configureStore } from '@reduxjs/toolkit';

import productReducer from './slices/productSlice';
import toastReducer from './slices/toastSlice';

export const store = configureStore({
  reducer: {
    productStore: productReducer,
    toastStore: toastReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;
