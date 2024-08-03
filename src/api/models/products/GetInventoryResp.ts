export interface GetInventoryResp {
  productId: string;
  sku: string;
  color: string;
  size: string;
  listPrice: number | null;
  discount: number;
  discountPercentage: number;
  salePrice: number;
  sold: number;
  stock: number;
}
