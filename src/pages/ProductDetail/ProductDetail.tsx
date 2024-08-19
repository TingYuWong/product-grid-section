import { useEffect } from 'react';
import * as $ from './ProductDetail.style';
import { getProductInfo } from '@/api/services/productListService';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProductInfo } from '@/redux/slices/productSlice';
import { IRootState } from '@/redux/store';
import { GetProductInfoResp } from '@/api/models/products/GetProductInfoResp';
import { AccordionContainer, AccordionContent } from '@/components/prototypes/accordion';
import expandIcon from '@/assets/circle-plus.svg';
import closeIcon from '@/assets/circle-minus.svg';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productInfo: GetProductInfoResp[] = useSelector((state: IRootState) => state.productStore.productInfo);

  useEffect(() => {
    getProductInfo().then((res) => {
      dispatch(setProductInfo(res.filter((item) => item.productId === id)));
    });
  }, []);

  return (
    <$.Wrap>
      <$.Images></$.Images>
      <$.Description>
        <$.StyledAccordionContainersWrapper multiple={true}>
          {productInfo.map((item, index) => (
            <AccordionContainer key={index}>
              <$.StyledAccordionTitle
                expandIcon={<img src={expandIcon} />}
                closeIcon={<img src={closeIcon} />}
                reverse={true}
              >
                {item.title}
              </$.StyledAccordionTitle>
              <AccordionContent>
                {item.description.map((description, key) => (
                  <$.InfoItem key={key}>{description}</$.InfoItem>
                ))}
                {index !== productInfo.length - 1 && <$.DividedLine />}
              </AccordionContent>
            </AccordionContainer>
          ))}
        </$.StyledAccordionContainersWrapper>
      </$.Description>
    </$.Wrap>
  );
};

export default ProductDetail;
