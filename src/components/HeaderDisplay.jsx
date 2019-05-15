import React from 'react';
import '../css/HeaderDisplay.css';

const HeaderDisplay = (props) => {
  const { header } = props; 
  return (
    <h2 className="HeaderDisplay">
      {header}
    </h2>
  );
}

export default HeaderDisplay;