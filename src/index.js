import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { CharacterProvider } from './state/CharacterProvider';
import { useTheme } from './state/useTheme';
render(
 
  <CharacterProvider>
    <useTheme>
      <App />
    </useTheme>
  </CharacterProvider>,
  document.getElementById('root')
);
