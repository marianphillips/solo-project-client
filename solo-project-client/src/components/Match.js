import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import MatchBox from "./MatchBox"
const blank = require("../data/blank");

function Match({ wine, setAnswers, setWine }) {
  const [fade, setFade] = useState('fade-out')
  const navigate = useNavigate();
  
  useEffect(() => {
      setTimeout(() => setFade('fade-in'), 800)
  }, [])

   const retake = () => {
    setWine("")
    setAnswers(blank)
    navigate("/quiz");
  };

  return (
    <div className={fade}>
    {wine && <>
      <p>Here is your match!</p>
      <MatchBox wine={wine} />
     </>}
      <button onClick={retake}>Re-Take Quiz</button>
    </div>
  );
}

export default Match;
