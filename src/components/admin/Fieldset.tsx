import React from 'react';

interface Props {
  children: React.ReactNode
  legend?: string
}

export default function Fieldset({ children, legend }: Props) {
  return (
    <fieldset className="space-y-2">
      { legend && (
        <legend className="text-center font-bold mb-2">{legend}</legend>
      )}
      {children}
    </fieldset>
  );
}
