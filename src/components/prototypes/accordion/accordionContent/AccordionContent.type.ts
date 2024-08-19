import { ReactNode } from 'react';

export interface BaseProps {
	children: ReactNode;
}

export interface AccordionContentProps extends BaseProps {
	name?: string;
	className?: string;
	expanded?: boolean;
}
