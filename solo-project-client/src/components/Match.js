import { useNavigate } from "react-router-dom";
const blank = require("../data/blank");

function Match({ answers, setAnswers }) {
  const navigate = useNavigate();

  const retake = () => {
    setAnswers(blank)
    navigate("/quiz");
  };

  return (
    <>
      <p>Here is your match!</p>
      <button onClick={retake}>Re-Take Quiz</button>
    </>
  );
}

export default Match;
