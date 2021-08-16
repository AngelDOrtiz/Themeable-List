
import React from 'react';
import { useCharacters } from '../../state/CharacterProvider';
import Character from './Characters';


const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map((character) => (
    <li key={characters.name}>
      <Character {...character} />
    </li>
  ));

  return <ul>{characterElements}</ul>;
};

export default CharacterList;
