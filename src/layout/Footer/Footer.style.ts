import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const Wrap = styled.div`
  box-sizing: border-box;
  padding: 96px;
  border-radius: 6px;
  background-color: #fff;
  @media screen and (max-width: 1050px) {
    padding: 64px 16px;
  }
`;

export const Subscribe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 64px;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    gap: 16px;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 48px;
    gap: 32px;
  }
`;

export const Texts = styled.div``;

export const Title = styled.div`
  font-size: 20px;
  color: #171717;
  font-weight: 900;
  margin-bottom: 8px;
`;

export const Subtitle = styled.div`
  font-size: 16px;
  color: #525252;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 1050px) {
    width: max-content;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  @media screen and (min-width: 1050px) {
    width: 270px;
  }
`;

export const Input = styled(TextField)`
  width: 100%;
  background-color: #fafafa;
  & input {
    box-sizing: border-box;
    height: 40px;
    color: #171717;
  }
  & label {
    color: #737373;
    font-size: 14px;
    transform: translate(14px, 10px) scale(1);
  }
  & fieldset {
    border-color: #e6e6e6;
  }
`;

export const ErrorHint = styled.div`
  color: #dc2626;
  font-size: 14px;
  height: 17px;
`;

export const Button = styled.div<{ $disabled: boolean }>`
  width: 98px;
  height: 40px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  background-color: ${(props) => (props.$disabled ? '#f5f5f5' : '#4338ca')};
  color: ${(props) => (props.$disabled ? '#a3a3a3' : '#fff')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.$disabled ? '#f5f5f5' : '#3730a3')};
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 64px;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    gap: 48px;
  }
  @media screen and (max-width: 600px) {
    gap: 32px;
  }
`;

export const LogoRow = styled.div`
  flex: 1;
`;

export const Items = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const Categories = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Collections = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: 32px;
`;

export const Brand = styled.div`
  color: #171717;
  font-weight: 900;
`;

export const NavTitle = styled.div`
  font-size: 14px;
  color: #737373;
  margin-bottom: 4px;
`;

export const NavItem = styled.div`
  font-size: 16px;
  color: #525252;
  font-weight: 600;
  cursor: pointer;
`;

export const DividedLine = styled.div`
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
`;

export const Sns = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
`;

export const CopyRight = styled.div`
  color: #737373;
  font-size: 16px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  & img {
    cursor: pointer;
  }
`;
