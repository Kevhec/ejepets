'use client';

import React from 'react';
import Fieldset from '@/components/admin/Fieldset';
import LocationContainer from '@/components/admin/LocationFields';
import formatStoreDocument from '@/utils/formatStoreDocument';
import {
  ContactField,
  GeneralData,
  MultipleSelect,
} from '@/components/admin/layout';
import { addDoc } from 'firebase/firestore';
import { storesCol } from '@/services/firebase/config';
import { logOut } from '@/services/firebase/auth';
import isAuth from '@/components/IsAuth';

function Admin() {
  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    const form = evt.currentTarget as HTMLFormElement;

    const data = Object.fromEntries(new FormData(form));

    try {
      const documentToUpload = await formatStoreDocument(data);
      await addDoc(storesCol, documentToUpload);
      form.reset();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return (
    <>
      <button
        className="relative md:absolute top-3 right-3 text-crimnson font-bold"
        type="button"
        onClick={() => logOut()}
      >
        Cerrar Sesión
      </button>
      <div className="rounded-lg overflow-hidden border border-black shadow-sm">
        <h1 className="text-center text-white bg-black py-2">Agregar establecimientos</h1>
        <form
          className="bg-white border p-3 max-w-xl space-y-3"
          onSubmit={handleSubmit}
        >
          <Fieldset legend="Datos generales">
            <GeneralData />
          </Fieldset>
          <Fieldset legend="Tipos">
            <MultipleSelect />
          </Fieldset>
          <Fieldset legend="Ubicación">
            <LocationContainer />
          </Fieldset>
          <Fieldset legend="Contacto">
            <ContactField />
          </Fieldset>
          <button
            type="submit"
            className="w-full text-white bg-black font-bold text-center hover:bg-opacity-80 transition-all"
          >
            Cargar Establecimiento
          </button>
        </form>
      </div>
    </>
  );
}

export default isAuth(Admin);
