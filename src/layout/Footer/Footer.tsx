import * as $ from './Footer.style';
import logo from '@/assets/logo.png';
import youtube from '@/assets/youtube.svg';
import instagram from '@/assets/instagram.svg';
import facebook from '@/assets/facebook.svg';
import twitter from '@/assets/twitter.svg';
import github from '@/assets/github.svg';
import isEmail from 'validator/lib/isEmail';
import { ChangeEvent, useState } from 'react';
import { openToast } from '@/redux/slices/toastSlice';
import { useDispatch } from 'react-redux';
import { TOAST_SEVERITY } from '@/enums/toastSeverity';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [errorHint, setErrorHint] = useState<string | null>('Email address is required.');

  const dispatch = useDispatch();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);

    if (val === '') {
      setErrorHint('Email address is required.');
      return;
    }
    if (!isEmail(val)) {
      setErrorHint('Please enter a valid email address.');
      return;
    }

    setErrorHint(null);
  };

  const handleToast = () => {
    if (errorHint) return;
    if (Math.random() > 0.5) {
      dispatch(openToast({ message: 'Subscription successful! Please check your email to confirm.' }));
    } else {
      dispatch(
        openToast({
          message: 'Failed to subscribe. Please ensure your email is correct or try again later.',
          severity: TOAST_SEVERITY.ERROR,
        }),
      );
    }
  };

  return (
    <$.Wrap>
      <$.Subscribe>
        <$.Texts>
          <$.Title>Join our newsletter</$.Title>
          <$.Subtitle>We'll send you a nice letter once per week. No spam.</$.Subtitle>
        </$.Texts>
        <$.Email>
          <$.InputWrap>
            <$.Input placeholder='Enter your email' fullWidth value={email} onChange={handleEmailChange} />
            <$.ErrorHint>{errorHint}</$.ErrorHint>
          </$.InputWrap>
          <$.Button $disabled={Boolean(errorHint)} onClick={handleToast}>
            Subscribe
          </$.Button>
        </$.Email>
      </$.Subscribe>
      <$.NavItems>
        <$.LogoRow>
          <$.Logo>
            <img src={logo} alt='logo' />
            <$.Brand>StyleNest</$.Brand>
          </$.Logo>
          <$.Subtitle>Craft stunning style journeys that weave more joy into every thread.</$.Subtitle>
        </$.LogoRow>
        <$.Items>
          <$.Categories>
            <$.NavTitle>SHOP CATEGORIES</$.NavTitle>
            <$.NavItem>Unisex</$.NavItem>
            <$.NavItem>Women</$.NavItem>
            <$.NavItem>Men</$.NavItem>
          </$.Categories>
          <$.Collections>
            <$.NavTitle>SHOP COLLECTIONS</$.NavTitle>
            <$.NavItem>Latest arrivals</$.NavItem>
            <$.NavItem>Urban Oasis </$.NavItem>
            <$.NavItem>Cozy Comfort </$.NavItem>
            <$.NavItem>Fresh Fusion</$.NavItem>
          </$.Collections>
        </$.Items>
      </$.NavItems>
      <$.DividedLine />
      <$.Sns>
        <$.CopyRight>© 2024 StyleNest, Inc. All rights reserved.</$.CopyRight>
        <$.Icons>
          <img src={youtube} alt='youtube' />
          <img src={instagram} alt='ig' />
          <img src={facebook} alt='fb' />
          <img src={github} alt='github' />
          <img src={twitter} alt='twitter' />
        </$.Icons>
      </$.Sns>
    </$.Wrap>
  );
};

export default Footer;
