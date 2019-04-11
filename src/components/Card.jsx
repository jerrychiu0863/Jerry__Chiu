import React from 'react';
import '../css/Skills.css';

const Card = (props) => {
  const { id, type, content } = props;
  
  return (
    <div className="card" style={{textAlign: 'center'}}>
      <div className={`card__title card__title-${id}`}>
        <span>{type}</span>
      </div>
      <p style={{textAlign: 'left', lineHeight: '1.8', color: '#666'}}>{content}
      </p>
   </div>
  );
}

export default Card;