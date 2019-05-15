import React from 'react';
import '../css/Skills.css';

const Card = (props) => {
  const { id, type, content } = props;
  
  return (
   
    <div className="Card col-12 col-sm-6 col-md-6 col-lg-4">
     <div className="Card__container card">
       <div className={`Card__container--title Card__container--title-${id}`}>
        <span>
          {type}
        </span>
       </div>
       <p className="Card__container--text">
         {content}
       </p>
     </div>
      
   </div>
  );
}

export default Card;

 {/*<div className="card" style={{textAlign: 'center'}}>
      <div className={`card__title card__title-${id}`}>
        <span>{type}</span>
      </div>
      <p style={{textAlign: 'left', lineHeight: '1.8', color: '#666'}}>{content}
      </p>
   </div>*/}