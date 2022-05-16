import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const data = require('../data/data')

function Question( {setAnswers} ) {
    const [questionNumber, setQuestionNumber] = useState(0)
    const navigate = useNavigate()

    const nextButton = () => {
        if(questionNumber !== 7) {
        setQuestionNumber(questionNumber + 1)
        }
    }

    const backButton = () => {
        if(questionNumber !== 0) {
        setQuestionNumber(questionNumber - 1)
        }
    }

    const submitAnswers = () => {
        navigate('/match')
    }
    
    return (
      <div className="Question">
      <div><h2>Question {data[questionNumber].number}</h2></div>
      <div><h3>{data[questionNumber].question}</h3></div>
      <div>{data[questionNumber].answers.map(answer => <button>{answer}</button>)}</div>
      <div>
          {questionNumber === 7 ? <button onClick={submitAnswers}>FIND YOUR WINE</button> : 
          (questionNumber === 0 ? <button className='next-button' onClick={nextButton}>Next →</button> :
          <><button className='next-back-button' onClick={backButton}>← Back</button>
          <button className='next-back-button' onClick={nextButton}>Next →</button></> )
        }
        </div>
      </div>
    );
  }
  
  export default Question;