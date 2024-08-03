export interface IInventoryInfoProps {
  productId: string;
  name: string;
}

export interface OrganizedObjectType {
  [key: string]: any;
}

export interface InventoryObject {
  discount: number;
  discountPercentage: number;
  listPrice: number;
  salePrice: number;
  sold: number;
  stock: number;
  sku: string;
}
