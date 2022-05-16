import { useState } from "react";
import { useNavigate } from "react-router-dom";
const data = require("../data/data");

function Question({ answers, setAnswers }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const navigate = useNavigate();

  const nextButton = () => {
    if (questionNumber !== 7) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  const backButton = () => {
    if (questionNumber !== 0) {
      setQuestionNumber(questionNumber - 1);
    }
  };

  const amendAnswers = (event) => {
    if (data[questionNumber].type === "chooseOne") {
      if (answers[data[questionNumber].key] === event.target.value) {
        setAnswers({
          ...answers,
          [data[questionNumber].key]: "",
        });
      } else {
        setAnswers({
          ...answers,
          [data[questionNumber].key]: event.target.value,
        });
      }
    }
    if (data[questionNumber].type === "chooseMany") {
      if (answers[data[questionNumber].key].includes(event.target.value)) {
        const filteredArray = answers[data[questionNumber].key].filter(
          (answer) => answer !== event.target.value
        );
        setAnswers({
          ...answers,
          [data[questionNumber].key]: filteredArray,
        });
      } else {
        setAnswers({
          ...answers,
          [data[questionNumber].key]: [
            ...answers[data[questionNumber].key],
            event.target.value,
          ],
        });
      }
    }
  };

  const submitAnswers = () => {
    console.log(answers);
    navigate("/match");
  };

  const isSelected = (value) => {
    return (
      answers[data[questionNumber].key].includes(value) ||
      answers[data[questionNumber].key] === value
    );
  };

  return (
    <div className='Question'>
      <div>
        <h2>Question {data[questionNumber].number}</h2>
      </div>
      <div>
        <h3>{data[questionNumber].question}</h3>
      </div>
      <div>
        {data[questionNumber].answers.map((answer, index) => (
          <button
            className={
              isSelected(answer) ? "selected-button" : "unselected-button"
            }
            key={index}
            onClick={amendAnswers}
            value={answer}
          >
            {answer}
          </button>
        ))}
      </div>
      <div>
        {questionNumber === 7 ? (
          <button onClick={submitAnswers}>FIND YOUR WINE</button>
        ) : questionNumber === 0 ? (
          <button className='next-back-button' onClick={nextButton}>
            Next →
          </button>
        ) : (
          <>
            <button className='next-back-button' onClick={backButton}>
              ← Back
            </button>
            <button className='next-back-button' onClick={nextButton}>
              Next →
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Question;
