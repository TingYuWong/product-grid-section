import { isValidElement, useState, cloneElement, Children, useEffect } from 'react';
import { AccordionContainersWrapperProps } from './AccordionContainersWrapper.type';
import * as $ from './AccordionContainersWrapper.style';

const AccordionContainersWrapper: React.FC<AccordionContainersWrapperProps> = ({
  className = '',
  children,
  multiple = false,
  expanded,
}) => {
  const [expandedItems, setExpandedItems] = useState<number[]>(expanded || []);
  const handleExpandedItems = (clickedIdx: number) => {
    let tempArr = expandedItems.map((item) => item);
    // open multiple items at a time
    const tempArrIndex = tempArr.findIndex((item) => item === clickedIdx);
    if (multiple) {
      if (tempArrIndex === -1) {
        tempArr.push(clickedIdx);
      } else {
        tempArr.splice(tempArrIndex, 1);
      }
      setExpandedItems(tempArr);
      return;
    }
    // open single item at a time
    tempArr = tempArrIndex === -1 ? [clickedIdx] : [];
    setExpandedItems(tempArr);
  };

  useEffect(() => {
    if (expanded) {
      setExpandedItems(expanded);
    }
  }, [expanded]);

  return (
    <$.AccordionContainersWrapperStyle className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return null;
        if (
          child.props.name === 'AccordionContainer' ||
          // if we send styled-component as a child, our original react component
          // would become a target controlled by styled-component
          // so we need to access our react child through child.type.target?.defaultProps.name
          // cuz now we have no idea which type "child.type" is
          // so as a temporary solution, we type it as any
          (child.type as any).target?.defaultProps.name === 'AccordionContainer'
        )
          return cloneElement(child as React.ReactElement, {
            index,
            expanded: expandedItems.includes(index),
            handleExpandedItems,
          });
        return null;
      })}
    </$.AccordionContainersWrapperStyle>
  );
};
AccordionContainersWrapper.defaultProps = { name: 'AccordionContainersWrapper' };
export default AccordionContainersWrapper;
