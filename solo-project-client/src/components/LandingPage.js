import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const [fade, setFade] = useState("fade-out")
  const navigate = useNavigate();

  useEffect(() => {
      setTimeout(() => setFade("fade-in"), 2000)
  }, [])

  const takeQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className={fade}>
      <p>Find your perfect bottle at Pacific Wines through a few quick questions...</p>
      <button onClick={takeQuiz}>take the quiz</button>
    </div>
  );
}

export default LandingPage;
