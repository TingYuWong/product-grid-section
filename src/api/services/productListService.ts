import baseAxios from '@/api/axios';

import { GetCategoryResp } from '@/api/models/products/GetCategoryResp';
import { GetCollectionResp } from '@/api/models/products/GetCollectionResp';
import { GetInventoryResp } from '@/api/models/products/GetInventoryResp';
import { GetProductImageResp } from '@/api/models/products/GetProductImageResp';
import { GetProductResp } from '@/api/models/products/GetProductResp';
import { GetProductInfoResp } from '@/api/models/products/GetProductInfoResp';
import { GetProductReviewResp } from '@/api/models/products/GetProductReviewResp';
import { GetUsers } from '../models/products/GetUsers';

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

export const getProductInfo = async () => {
  return baseAxios.get<GetProductInfoResp[]>(`/product-info`).then((res) => res.data);
};

export const getProductReview = async () => {
  return baseAxios.get<GetProductReviewResp[]>(`/product-review`).then((res) => res.data);
};

export const getUsers = async () => {
  return baseAxios.get<GetUsers[]>(`/users`).then((res) => res.data);
};
