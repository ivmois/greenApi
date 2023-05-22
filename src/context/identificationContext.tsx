import { createContext, useState } from 'react';

interface IIdentificationContext {
  identification: boolean;
  setIdentification: (value: boolean | ((value: boolean) => boolean)) => void;
}

export const identificationContext = createContext<IIdentificationContext>({ identification: false, setIdentification: () => {} });

export const IdentificationContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState(false);
  return (
    <identificationContext.Provider value={{ identification: data, setIdentification: setData }}>
      {children}
    </identificationContext.Provider>
  );
};
