import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getInventory, getProductImages, getProducts } from '@/api/services/productListService';
import InventoryInfo from '@/components/InventoryInfo/InventoryInfo';
import { setInventory, setProductImages, setProducts } from '@/redux/slices/productSlice';
import { IRootState } from '@/redux/store';

import * as $ from './PhotoGrid.styled';
import { OrganizedObjectType } from './PhotoGrid.type';

// responsibility: call api and get data

const PhotoGrid = () => {
  const products = useSelector((state: IRootState) => state.productStore.products);
  const inventory = useSelector((state: IRootState) => state.productStore.inventory);
  const productImages = useSelector((state: IRootState) => state.productStore.productImages);

  const isData =
    products.length !== 0 && Object.keys(inventory).length !== 0 && Object.keys(productImages).length !== 0;

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts()
      .then((res) => {
        dispatch(setProducts(res));
        return;
      })
      .catch((err) => console.log('err', err));

    getInventory()
      .then((res) => {
        const data = res.reduce((acc: OrganizedObjectType, curr) => {
          if (!acc[`${curr.productId}-color`]) acc[`${curr.productId}-color`] = [];
          if (!acc[`${curr.productId}-size`]) acc[`${curr.productId}-size`] = [];

          acc[`${curr.productId}--${curr.color}-${curr.size}`] = {
            discount: curr.discount,
            discountPercentage: curr.discountPercentage,
            listPrice: curr.listPrice,
            salePrice: curr.salePrice,
            sold: curr.sold,
            stock: curr.stock,
            sku: curr.sku,
          };
          acc[`${curr.productId}-color`] = [...new Set(acc[`${curr.productId}-color`].concat(curr.color))];
          acc[`${curr.productId}-size`] = [...new Set(acc[`${curr.productId}-size`].concat(curr.size))];
          return acc;
        }, {});
        console.log('inventory data', data);
        dispatch(setInventory(data));
        return;
      })
      .catch((err) => console.log('err', err));

    getProductImages()
      .then((res) => {
        const data = res.reduce((acc: OrganizedObjectType, curr) => {
          if (!acc[`${curr.productId}-color`]) acc[`${curr.productId}-color`] = [];
          acc[`${curr.productId}-color`] = [...new Set(acc[`${curr.productId}-color`].concat(curr.imageUrl))];
          return acc;
        }, {});
        dispatch(setProductImages(data));
        return;
      })
      .catch((err) => console.log('err', err));
  }, [dispatch]);

  return (
    <>
      {isData && (
        <$.Wrap>
          <$.TitleRow>
            <$.Title>Latest Arrivals</$.Title>
            <$.ViewAll>View All</$.ViewAll>
          </$.TitleRow>
          <$.GridContainer>
            {products.map((item) => {
              return <InventoryInfo productId={item.productId} name={item.name} key={item.productId} />;
            })}
          </$.GridContainer>
        </$.Wrap>
      )}
    </>
  );
};

export default PhotoGrid;
