import React from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Identification from './pages/identification';
import Dialogs from './pages/dialogs';
import { SettingContextProvider } from './context/settingsContext';
import { IdentificationContextProvider } from './context/identificationContext';
import { LoginDetailsContextProvider } from './context/loginDetailsContext';
import { CurrentChatContextProvider } from './context/currentChat';
import { ChatContextProvider } from './context/chatContext';

function App() {
  return (
    <div className="App">
      <LoginDetailsContextProvider>
        <IdentificationContextProvider>
          <SettingContextProvider>
            <CurrentChatContextProvider>
              <ChatContextProvider>
                <Routes>
                  <Route path="/" element={<Identification />} />
                  <Route path="/dialogs" element={<Dialogs />} />
                </Routes>
              </ChatContextProvider>
            </CurrentChatContextProvider>
          </SettingContextProvider>
        </IdentificationContextProvider>
      </LoginDetailsContextProvider>
    </div>
  );
}

export default App;
