import styled from 'styled-components';

export const AccordionTitleStyle = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	gap: 12px;
	justify-content: flex-start;
`;

export const AccordionTxtStyle = styled.div`
	order: 0;
`;

const AccordionIconBaseStyle = styled.div`
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const AccordionDefaultIconStyle = styled(AccordionIconBaseStyle)`
	order: -1;
`;

export const AccordionReverseIconStyle = styled(AccordionIconBaseStyle)`
	order: 1;
`;
