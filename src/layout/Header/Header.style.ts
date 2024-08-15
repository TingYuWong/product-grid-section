import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding: 16px 112px 0 112px;
  @media screen and (max-width: 768px) {
    padding: 16px 32px 0 32px;
  }
  @media screen and (max-width: 375px) {
    padding: 16px 16px 0 16px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  flex: 4;
  gap: 24px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  gap: 8px;
  cursor: pointer;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Brand = styled.div`
  color: #171717;
  font-weight: 900;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
`;

export const DesktopNavItem = styled.div`
  cursor: pointer;
  color: #525252;
  &:hover {
    color: #171717;
  }
`;

export const MobileMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 375px;
  height: 100vh;
  background-color: #fff;
  transform: ${(props) => (props.open ? 'translateX(0px)' : 'translateX(375px)')};
  transition: transform ease-in-out 300ms;
  box-sizing: border-box;
  border-right: 20px solid #525252;
  padding: 32px 16px 16px 16px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MobileNavItem = styled.div`
  cursor: pointer;
  color: #171717;
  padding: 8px 12px;
`;
