import React from 'react';
import FormInput from '../FormInput';

export default function ContactFields() {
  return (
    <>
      <FormInput
        label="Email"
        type="email"
        id="storeEmail"
        name="storeEmail"
        autoComplete="email"
      />
      <FormInput
        label="Teléfono/s"
        type="tel"
        id="storeTel"
        name="storeTel"
        autoComplete="tel"
      />
      <FormInput
        label="Website"
        type="text"
        id="storeWebsite"
        name="storeWebsite"
      />
    </>
  );
}
