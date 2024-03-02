import mergeTailwind from '@/utils/mergeTailwind';
import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  labelClasses?: string
  column?: boolean
}

export default function FormInput({
  type,
  id,
  name,
  label,
  autoComplete,
  accept,
  column,
  value,
  onPaste,
  onChange,
  labelClasses,
  multiple,
}: Props) {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(evt);
    }
  };

  const labelClass = mergeTailwind([`grid w-full ${column ? 'grid-cols-1' : 'grid-cols-[82px_1fr]'} gap-x-2 col-auto items-center`, labelClasses]);

  return (
    <label htmlFor={id} className={labelClass}>
      {label}
      <input
        type={type}
        id={id}
        name={name}
        className="border border-indigo-300 rounded-md px-2 py-1 focus-visible:outline-indigo-500 focus-visible:border-transparent"
        autoComplete={autoComplete}
        accept={accept}
        onPaste={onPaste}
        onChange={handleChange}
        value={value}
        multiple={multiple}
      />
    </label>
  );
}
