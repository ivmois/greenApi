import { createContext, useState } from 'react';
import { IIdentification } from '../types/types';

interface ILoginDetails {
  loginDetails: IIdentification;
  setLoginDetails: (value: IIdentification | ((value: IIdentification) => IIdentification)) => void;
}

export const loginDetailsContext = createContext<ILoginDetails>({
  loginDetails: { idInstance: '', apiTokenInstance: '' },
  setLoginDetails: () => {},
});

export const LoginDetailsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({ idInstance: '', apiTokenInstance: '' });
  return <loginDetailsContext.Provider value={{ loginDetails: data, setLoginDetails: setData }}>{children}</loginDetailsContext.Provider>;
};
