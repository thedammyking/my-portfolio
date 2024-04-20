'use client';

import React, { HTMLAttributes } from 'react';
import cx from 'classnames';
import { uniqueId } from 'lodash';

import { AccordionItemProvider, useAccordion } from '@/providers/AccordionProvider';

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  isOpenedByDefault?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  className,
  isOpenedByDefault,
  ...props
}) => {
  const itemRef = React.useRef(uniqueId('accordion-item'));

  const { activeAccordion, setActiveAccordion } = useAccordion();

  React.useEffect(() => {
    if (isOpenedByDefault && !activeAccordion) {
      setActiveAccordion(itemRef.current);
    }
  }, [isOpenedByDefault, activeAccordion, setActiveAccordion]);

  return (
    <AccordionItemProvider itemId={itemRef.current}>
      <li>
        <div
          className={cx('relative border-0 border-b-[1px] border-dark-grey-100/10', className)}
          {...props}
          onClick={() => setActiveAccordion(itemRef.current)}
        />
      </li>
    </AccordionItemProvider>
  );
};

export default AccordionItem;
