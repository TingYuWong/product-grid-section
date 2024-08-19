import styled from 'styled-components';
import { AccordionContainersWrapper, AccordionTitle } from '@/components/prototypes/accordion';

export const StyledAccordionContainersWrapper = styled(AccordionContainersWrapper)`
  gap: 32px;
`;

export const StyledAccordionTitle = styled(AccordionTitle)`
  justify-content: space-between;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
`;

export const Wrap = styled.div`
  padding: 96px;
  gap: 32px;
  box-sizing: border-box;
  display: flex;
`;

export const Images = styled.div`
  flex: 1;
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

export const Description = styled.div`
  flex: 1;
`;

export const InfoItems = styled.div`
  box-sizing: border-box;
  padding-left: 25px;
`;

export const InfoItem = styled.li`
  color: #525252;
  font-size: 16px;
  line-height: 24px;
  padding-left: 25px;
`;

export const DividedLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #525252;
  margin-top: 32px;
`;
