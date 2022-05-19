import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const { dataBoth, dataRed, dataWhite } = require("../data/data");

function Question({ answers, setAnswers, setWine }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [fade, setFade] = useState("fade-out");
  const [data, setData] = useState(dataBoth)

  useEffect(() => {
    setFade("fade-in")
    if(answers.type === "Red") setData(dataRed)
    if(answers.type === "na" || answers.type === "Sparkling") setData(dataBoth)
    if(answers.type === "White" || answers.type === "Rose") setData(dataWhite)
  }, [questionNumber, answers.type])

  const navigate = useNavigate();

  const nextButton = () => {
    if (questionNumber !== (data.length - 1)) {
        setFade("fade-out")
        setTimeout(setQuestionNumber(questionNumber + 1), 1500);
    }
  };

  const backButton = () => {
    if (questionNumber !== 0) {
        setFade("fade-out")
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

  const submitAnswers = (event) => {
    event.preventDefault();
    const options =  {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(answers)
    }

    fetch(process.env.REACT_APP_API_URL + '/wine', options)
    .then(res =>  res.json())
    .then(json => setWine(json.data))

    console.log(answers);
    navigate("/match");
  };

  const isSelected = (value) => {
    if (data[questionNumber].type === "chooseOne") return answers[data[questionNumber].key] === value
    if (data[questionNumber].type === "chooseMany") return answers[data[questionNumber].key].includes(value)
  };

  return (
    <div className={fade}>
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
              isSelected(answer.value) ? "selected-button" : "unselected-button"
            }
            key={index}
            onClick={amendAnswers}
            value={answer.value}
          >
            {answer.button}
          </button>
        ))}
      </div>
      <div>
        {questionNumber === (data.length - 1) ? (
            <>
            <button className='next-back-button' onClick={backButton}>
              ← Back
            </button>
            <div>
            <button className='find-wine-button' onClick={submitAnswers} type='submit'>find your wine</button>
            </div>
          </>       
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
