import { AccordionTitleProps } from './AccordionTitle.type';
import * as $ from './AccordionTitle.style';

const AccordionTitle: React.FC<AccordionTitleProps> = ({
	className = '',
	children,
	expandIcon,
	closeIcon,
	reverse = false,
	index = 0,
	expanded = false,
	handleExpandedItems = () => {}
}) => {
	return (
		<$.AccordionTitleStyle className={className} onClick={() => handleExpandedItems(index)}>
			{reverse ? (
				<$.AccordionReverseIconStyle>{expanded ? closeIcon : expandIcon}</$.AccordionReverseIconStyle>
			) : (
				<$.AccordionDefaultIconStyle>{expanded ? closeIcon : expandIcon}</$.AccordionDefaultIconStyle>
			)}
			<$.AccordionTxtStyle>{children}</$.AccordionTxtStyle>
		</$.AccordionTitleStyle>
	);
};
AccordionTitle.defaultProps = { name: 'AccordionTitle' };
export default AccordionTitle;
