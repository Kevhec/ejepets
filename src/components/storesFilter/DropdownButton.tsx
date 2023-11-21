import React from 'react';
import mergeTailwind from '@/utils/mergeTailwind';
import type { IconVariant } from '../icon/iconTypes';
import Icon from '../icon';

interface Props {
  children: React.ReactNode
  className: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: IconVariant
}

export default function DropdownButton({
  children, className, onClick, icon,
}: Props) {
  const buttonClasses = mergeTailwind(className);

  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      { children }
      { icon && <Icon variant={icon} /> }
    </button>
  );
}
