import { ReactNode } from 'react';

export interface BaseProps {
	children: ReactNode;
}

export interface AccordionTitleProps extends BaseProps {
	name?: string;
	className?: string;
	expandIcon: ReactNode;
	closeIcon: ReactNode;
	reverse?: boolean;
	index?: number;
	expanded?: boolean;
	handleExpandedItems?: (index: number) => void;
}
