import React, { useState } from 'react';
import './EightBall.css';
import 'animate.css';

function EightBall({answers}) {
    const [color, setColor] = useState('black');
    const [message, setMessage] = useState('Think of a Question');
    
    function handleClick() {
      const randomIndex = Math.floor(Math.random() * answers.length);
      setColor(answers[randomIndex].color);
      setMessage(answers[randomIndex].msg);
    }
  
    return (
      <div className={`EightBall ${color} animate__animated animate__shakeY`} onClick={handleClick}>
        {message}
      </div>
    );
  }

  
  export default EightBall;
