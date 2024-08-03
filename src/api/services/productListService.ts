import baseAxios from '@/api/axios';

import { GetCategoryResp } from '../models/products/GetCategoryResp';
import { GetCollectionResp } from '../models/products/GetCollectionResp';
import { GetInventoryResp } from '../models/products/GetInventoryResp';
import { GetProductImageResp } from '../models/products/GetProductImageResp';
import { GetProductResp } from '../models/products/GetProductResp';

export const getProducts = async () => {
  return baseAxios.get<GetProductResp[]>(`/products`).then((res) => res.data);
};

export const getCollections = async () => {
  return baseAxios.get<GetCollectionResp[]>(`/collections`).then((res) => res.data);
};

export const getInventory = async () => {
  return baseAxios.get<GetInventoryResp[]>(`/inventory`).then((res) => res.data);
};

export const getProductImages = async () => {
  return baseAxios.get<GetProductImageResp[]>(`/product-images`).then((res) => res.data);
};

export const getCategories = async () => {
  return baseAxios.get<GetCategoryResp[]>(`/categories`).then((res) => res.data);
};
