import React from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Identification from './pages/identification';
import Dialogs from './pages/dialogs';
import { SettingContextProvider } from './context/settingsContext';
import { LoginDetailsContextProvider } from './context/loginDetailsContext';
import { ChatContextProvider } from './context/chatContext';

function App() {
  return (
    <div className="App">
      <LoginDetailsContextProvider>
        <SettingContextProvider>
          <ChatContextProvider>
            <Routes>
              <Route path="/" element={<Identification />} />
              <Route path="/dialogs" element={<Dialogs />} />
            </Routes>
          </ChatContextProvider>
        </SettingContextProvider>
      </LoginDetailsContextProvider>
    </div>
  );
}

export default App;
