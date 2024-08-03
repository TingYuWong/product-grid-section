import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 96px;
  @media screen and (max-width: 1400px) {
    padding: 96px 48px;
  }
  @media screen and (max-width: 1150px) {
    padding: 64px 16px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1030px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 740px) {
    grid-template-columns: 1fr;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 36px;
  gap: 10px;
`;

export const ViewAll = styled.button`
  border-radius: 4px;
  outline: none;
  padding: 10px 16px;
  max-height: 44px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.05);
  &:hover {
    background-color: #fafafa;
  }
`;

export const Title = styled.div`
  color: #171717;
  font-weight: 800;
  font-size: 30px;
`;
