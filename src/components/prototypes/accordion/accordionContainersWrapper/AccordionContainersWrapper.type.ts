import { ReactNode } from 'react';

export interface BaseProps {
  children: ReactNode;
}

export interface AccordionContainersWrapperProps extends BaseProps {
  name?: string;
  className?: string;
  multiple?: boolean;
  /** The index of the expanded content in the accordion */
  expanded?: number[];
}
