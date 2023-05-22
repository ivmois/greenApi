import { createContext, useState } from 'react';
import { IIdentification } from '../types/types';

interface ILogginDetails {
  loginDetails: IIdentification;
  setLoginDetails: (value: IIdentification | ((value: IIdentification) => IIdentification)) => void;
  identification: boolean;
  setIdentification: (value: boolean | ((value: boolean) => boolean)) => void;
}

export const loginDetailsContext = createContext<ILogginDetails>({
  loginDetails: { idInstance: '', apiTokenInstance: '' },
  setLoginDetails: () => {},
  identification: false,
  setIdentification: () => {},
});

export const LoginDetailsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loginDetails, setLoginDetails] = useState<IIdentification>({ idInstance: '', apiTokenInstance: '' });
  const [identification, setIdentification] = useState(false);

  const state = {
    loginDetails,
    setLoginDetails,
    identification,
    setIdentification,
  };

  return <loginDetailsContext.Provider value={state}>{children}</loginDetailsContext.Provider>;
};
