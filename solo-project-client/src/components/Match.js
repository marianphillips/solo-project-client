import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const blank = require("../data/blank");

function Match({ wine, setAnswers }) {
  const [fade, setFade] = useState('fade-out')
  const navigate = useNavigate();
  
  useEffect(() => {
      setFade('fade-in')
  }, [])

   const retake = () => {
    setAnswers(blank)
    navigate("/quiz");
  };

  return (
    <div className={fade}>
    {wine && <>
      <p>Here is your match!</p>
      <div className="wine-box">
     <div className="wine-box-image">
         <img className="wine-image" src={wine.imageUrl} alt="pacific wine bottle" />
    </div> 
    <div className="wine-box-text">
        <div className="wine-box-info">
        <h4>{wine.producer}</h4>
        <h4>{wine.name}</h4>
        <p>{wine.description}</p>
        <p>£{wine.price}</p>
        </div>
        <div className="wine-box-link">
            <a href={wine.url}>More Details</a>
        </div>
    </div>     
     </div>
     </>}
      <button onClick={retake}>Re-Take Quiz</button>
    </div>
  );
}

export default Match;
