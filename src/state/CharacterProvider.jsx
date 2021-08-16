import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchCharacters } from '../services/avatarAPI';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedApi, setSelectedApi] = useState('avatar');

  const apiMap = {
    avatar: fetchCharacters,
  };

  useEffect(() => {
    apiMap[selectedApi]().CharacterContext(setCharacters);
  }, [selectedApi]);

  return (
    <CharacterContext.Provider value={{ characters, setSelectedApi, apiMap }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useApi = () => {
  const { apiMap } = useContext(CharacterContext);
  return Object.keys(apiMap);
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};
  
export const useSetSelectedApi = () => {
  const { setSelectedApi } = useContext(CharacterContext);
  return setSelectedApi;
};
