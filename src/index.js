import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { CharacterProvider } from './state/CharacterProvider';
import { ThemeProvider } from 'styled-components';
render(
 
  <CharacterProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </CharacterProvider>,
  document.getElementById('root')
);
