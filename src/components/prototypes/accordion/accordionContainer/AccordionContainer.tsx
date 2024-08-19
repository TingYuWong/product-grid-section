import { isValidElement, cloneElement, Children } from 'react';
import { AccordionContainerProps } from './AccordionContainer.type';
import * as $ from './AccordionContainer.style';

const AccordionContainer: React.FC<AccordionContainerProps> = ({
	className = '',
	children,
	index,
	expanded,
	handleExpandedItems
}) => {
	return (
		<$.AccordionContainerStyle className={className}>
			{Children.map(children, (child) => {
				if (!isValidElement(child)) return null;
				if (
					child.props.name === 'AccordionTitle' ||
					// if we send styled-component as a child, our original react component
					// would become a target controlled by styled-component
					// so we need to access our react child through child.type.target?.defaultProps.name
					// cuz now we have no idea which type "child.type" is
					// so as a temporary solution, we type it as any
					(child.type as any).target?.defaultProps.name === 'AccordionTitle'
				)
					return cloneElement(child as React.ReactElement, {
						index,
						expanded,
						handleExpandedItems
					});
				if (
					child.props.name === 'AccordionContent' ||
					(child.type as any).target?.defaultProps.name === 'AccordionContent'
				) {
					return cloneElement(child as React.ReactElement, {
						expanded
					});
				}
				return null;
			})}
		</$.AccordionContainerStyle>
	);
};
AccordionContainer.defaultProps = { name: 'AccordionContainer' };
export default AccordionContainer;
