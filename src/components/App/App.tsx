import React from 'react';
import './App.module.scss';
import { ThemeProvider } from '../../app/theme/ThemeProvider';
import { Layout } from '../Layout';
import { LocalizationInitiator } from '../../app/localization/LocalizationStarter';
function App() {
  return (
    <>
      <LocalizationInitiator />
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
