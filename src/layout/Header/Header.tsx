import * as $ from './Header.style';
import logo from '@/assets/logo.png';
import cart from '@/assets/cart.png';
import menu from '@/assets/menu.png';
import close from '@/assets/close.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:950px)');
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <>
      <$.Container>
        <$.Wrap>
          <$.Left>
            <$.Logo>
              <img src={logo} alt='logo' />
              <$.Brand>StyleNest</$.Brand>
            </$.Logo>
          </$.Left>
          {!isMobile && (
            <$.Middle>
              <$.DesktopNavItem>Shop All</$.DesktopNavItem>
              <$.DesktopNavItem>Latest Arrivals</$.DesktopNavItem>
            </$.Middle>
          )}
          <$.Right>
            <img src={cart} alt='cart' />
            {isMobile && <img src={menu} alt='menu' onClick={() => setOpenMobileNav(true)} />}
          </$.Right>
        </$.Wrap>
      </$.Container>
      <$.MobileMenu open={isMobile && openMobileNav}>
        <$.Top>
          <$.Logo>
            <img src={logo} alt='logo' />
            <$.Brand>StyleNest</$.Brand>
          </$.Logo>
          <img src={close} alt='close-menu' onClick={() => setOpenMobileNav(false)} />
        </$.Top>
        <$.Bottom>
          <$.MobileNavItem>Shop All</$.MobileNavItem>
          <$.MobileNavItem>Latest Arrivals</$.MobileNavItem>
        </$.Bottom>
      </$.MobileMenu>
    </>
  );
};

export default Header;
