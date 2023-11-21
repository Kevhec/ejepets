import React from 'react';
import mergeTailwind from '@/utils/mergeTailwind';
import type { IconVariant } from '../icon/iconTypes';
import Icon from '../icon';

interface Props {
  children: React.ReactNode
  className?: string
  id: string | undefined
  value: string | undefined
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string
  icon?: IconVariant
}

export default function DropdownInput({
  children, className, id, value, onChange, name, icon,
}: Props) {
  const inputClasses = mergeTailwind(className);

  return (
    <label htmlFor={id} className={inputClasses}>
      { children }
      { icon && <Icon variant={icon} /> }
      <input
        className="hidden"
        id={id}
        type="radio"
        value={value}
        onChange={onChange}
        name={name}
      />
    </label>
  );
}
