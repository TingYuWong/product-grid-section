import { AccordionContentProps } from './AccordionContent.type';
import * as $ from './AccordionContent.style';

const AccordionContent: React.FC<AccordionContentProps> = ({
	className = '',
	children,
	expanded = false
}: AccordionContentProps) => {
	return (
		<$.AccordionContentStyle className={className} $expanded={expanded}>
			<$.AccordionContentWrap>{children}</$.AccordionContentWrap>
		</$.AccordionContentStyle>
	);
};
AccordionContent.defaultProps = { name: 'AccordionContent' };
export default AccordionContent;
