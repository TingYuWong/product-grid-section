import styled from 'styled-components';

export const Name = styled.div`
  font-size: 18px;
  color: #171717;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  cursor: pointer;
  &:hover {
    ${Name} {
      color: #4338ca;
    }
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Product = styled.div``;

export const Color = styled.div`
  font-size: 12px;
  color: #525252;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Price = styled.div`
  margin-bottom: 2px;
  font-size: 18px;
  color: #737373;
`;

export const Discount = styled.div`
  text-decoration: line-through;
  font-size: 12px;
  color: #525252;
`;

export const Colors = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Circle = styled.div<{ $color: string; $active: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: ${(props) => props.$color};
  border: ${(props) =>
    props.$active ? '1px solid #4338CA' : props.$color === 'white' ? '1px solid #D4D4D4' : props.$color};
  position: relative;
  &:hover {
    border: 1px solid #c7d2fe;
  }
`;

export const SelectedPseudoElement = styled.div`
  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 6px;
    border: 1px solid #fff;
    border-left: none;
    border-top: none;
    transform: rotate(45deg);
    top: 2.5px;
    left: 5px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #fff;
    top: 0;
    left: 0;
  }
`;

export const NoStockPseudoElement = styled.div`
  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 19px;
    background-color: #525252;
    transform: rotate(45deg);
    top: -2.5px;
    left: 6.5px;
  }
`;
