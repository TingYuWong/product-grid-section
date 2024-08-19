import { ReactNode } from 'react';

export interface BaseProps {
	children: ReactNode;
}

export interface AccordionContainerProps extends BaseProps {
	name?: string;
	className?: string;
	index?: number;
	expanded?: boolean;
	handleExpandedItems?: (index: number) => void;
}
