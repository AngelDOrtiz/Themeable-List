import React from 'react';
import CharacterList from '../characters/CharacterList';
import Header from '../header/Header';


export default function App() {
  return (
    <>
      <div style={{ height: '100vh' }}>
        <Header />
        <CharacterList />
      </div>
    </>
  );
}
