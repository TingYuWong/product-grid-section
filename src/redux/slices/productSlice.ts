import { createSlice } from '@reduxjs/toolkit';

import { GetProductResp } from '@/api/models/products/GetProductResp';

const initialState = {
  products: [] as GetProductResp[],
  categories: [],
  inventory: {},
  collections: [],
  productImages: {},
  productInfo: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductImages: (state, action) => {
      state.productImages = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCollections: (state, action) => {
      state.collections = action.payload;
    },
    setInventory: (state, action) => {
      state.inventory = action.payload;
    },
    setProductInfo: (state, action) => {
      state.productInfo = action.payload;
    },
  },
});

export const { setProducts, setProductImages, setCategories, setCollections, setInventory, setProductInfo } =
  productSlice.actions;

export default productSlice.reducer;
