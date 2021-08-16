import React from 'react';
import PropTypes from 'prop-types';



const Toggle = ({ theme, toggleTheme }) => {
  const lightTheme = theme === 'light';
  return (
    <button onClick={toggleTheme} >
      Change Theme
    </button>
  );
};

Toggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Toggle;
