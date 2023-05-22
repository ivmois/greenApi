import { createContext, useState } from 'react';

interface ISettingContext {
  settingsData: object;
  setSettingsData: (value: object | ((value: object) => object)) => void;
}

export const settingContext = createContext<ISettingContext>({ settingsData: {}, setSettingsData: () => {} });

export const SettingContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({});
  return <settingContext.Provider value={{ settingsData: data, setSettingsData: setData }}>{children}</settingContext.Provider>;
};
