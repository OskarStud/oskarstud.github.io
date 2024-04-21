import React from 'react';
import './App.module.scss';
import { ThemeProvider } from '../../app/theme/ThemeProvider';
import { Layout } from '../Layout';
function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
