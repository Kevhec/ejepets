import React from 'react';
import FormInput from '../FormInput';

export default function GeneralData() {
  return (
    <>
      <FormInput
        type="text"
        id="storeName"
        name="storeName"
        label="Nombre"
      />
      <label
        htmlFor="storeDescription"
        className="grid w-full grid-cols-[82px_1fr] gap-x-2 col-auto items-center"
      >
        Description
        <textarea
          name="storeDescription"
          id="storeDescription"
          cols={30}
          rows={8}
          className="border border-indigo-300 rounded-md px-2 py-1 focus-visible:outline-indigo-500 focus-visible:border-transparent"
        />
      </label>
      <FormInput
        type="file"
        label="Imagen"
        name="storeImage"
        id="storeImage"
      />
    </>
  );
}
