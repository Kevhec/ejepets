import React from 'react';
import SelectOption from '../SelectOption';

export default function MultipleSelect() {
  return (
    <div className="grid grid-cols-2">
      <SelectOption
        label="Refugio"
        value="refugio"
        name="type:refugio"
        id="type:refugio"
      />
      <SelectOption
        label="Veterinaria"
        value="veterinaria"
        name="type:veterinaria"
        id="type:veterinaria"
      />
      <SelectOption
        label="Peluquería"
        value="peluqueria"
        name="type:peluqueria"
        id="type:peluqueria"
      />
      <SelectOption
        label="Tienda"
        value="tienda"
        name="type:tienda"
        id="type:tienda"
      />
      <SelectOption
        label="Restaurante"
        value="restaurante"
        name="type:restaurante"
        id="type:restaurante"
      />
      <SelectOption
        label="Parque"
        value="parque"
        name="type:parque"
        id="type:parque"
      />
      <SelectOption
        label="Hotel"
        value="hotel"
        name="type:hotel"
        id="type:hotel"
      />
    </div>
  );
}
