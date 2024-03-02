import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function SelectOption({
  id, label, value, name,
}: Props) {
  return (
    <label htmlFor={id} className="flex gap-2 items-center">
      <input
        className=""
        id={id}
        type="checkbox"
        value={value}
        name={name}
      />
      { label }
    </label>
  );
}
