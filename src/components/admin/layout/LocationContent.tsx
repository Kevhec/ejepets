import React from 'react';
import FormInput from '../FormInput';
import type { LatLngState } from '../LocationFields';

interface Props extends LatLngState {
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  handlePaste: (evt: React.ClipboardEvent<HTMLInputElement>) => void
}

export default function LocationContent({
  handleChange, handlePaste, lat, lng,
}: Props) {
  return (
    <>
      <FormInput
        label="Dirección"
        type="text"
        id="storeDir"
        name="storeDir"
      />
      <div className="flex gap-2 mx-auto text-center">
        <FormInput
          label="Lat"
          type="text"
          id="storeLat"
          name="storeLat"
          onPaste={handlePaste}
          onChange={handleChange}
          value={lat}
          column
        />
        <FormInput
          label="Long"
          type="text"
          id="storeLong"
          name="storeLong"
          onPaste={handlePaste}
          onChange={handleChange}
          value={lng}
          column
        />
      </div>
    </>
  );
}
