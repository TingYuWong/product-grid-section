import styled from 'styled-components';

export const AccordionContentStyle = styled.div<{ $expanded?: boolean }>`
	display: grid;
	grid-template-rows: ${(props) => (props.$expanded ? '1fr' : '0fr')};
	transition: grid-template-rows 400ms ease;
`;

export const AccordionContentWrap = styled.div<{ $expanded?: boolean }>`
	overflow: hidden;
`;
