import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { IRootState } from '@/redux/store';

import * as $ from './InventoryInfo.style';
import { IInventoryInfoProps, InventoryObject, OrganizedObjectType } from './InventoryInfo.type';

// responsibility: (1) use productId to match and show inventory detail (2) switch color

const InventoryInfo = ({ productId, name }: IInventoryInfoProps) => {
  const [chosenColor, setChosenColor] = useState('#fff');
  const inventory: OrganizedObjectType = useSelector((state: IRootState) => state.productStore.inventory);
  const productImages: OrganizedObjectType = useSelector((state: IRootState) => state.productStore.productImages);

  useEffect(() => {
    setChosenColor(inventory[`${productId}-color`][0]);
  }, [productId, inventory]);

  const item: InventoryObject = inventory[`${productId}--${chosenColor}-${inventory[`${productId}-size`][0]}`];

  return (
    <$.Container>
      <$.Card>
        <$.ImageWrap>
          <$.Image src={productImages[`${productId}-color`][0]} />
        </$.ImageWrap>
        <$.Product>
          <$.Color>{chosenColor}</$.Color>
          <$.Name>{name}</$.Name>
        </$.Product>
        <$.PriceRow>
          {item?.discount || item?.discountPercentage ? (
            <>
              <$.Price>{`$${item?.salePrice}`}</$.Price>
              <$.Discount>{`$${item?.listPrice}`}</$.Discount>
            </>
          ) : (
            <>
              <$.Price>{`$${item?.listPrice}`}</$.Price>
            </>
          )}
        </$.PriceRow>
        <$.Colors>
          {inventory[`${productId}-color`].map((color: string) => (
            <$.Circle
              key={`${productId}-${color}`}
              $color={color}
              $active={chosenColor === color}
              onClick={() => setChosenColor(color)}
            >
              {chosenColor === color && (
                <>{item?.stock === 0 ? <$.NoStockPseudoElement /> : <$.SelectedPseudoElement />}</>
              )}
            </$.Circle>
          ))}
        </$.Colors>
      </$.Card>
    </$.Container>
  );
};

export default InventoryInfo;
