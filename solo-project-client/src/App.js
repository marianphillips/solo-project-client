import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Question from './components/Question'
import LandingPage from './components/LandingPage'
import Match from './components/Match'

function App() {
  const [answers, setAnswers] = useState({})

  return (
    <div className="App">
        <img src={require('./images/pw.PNG')} alt="pacific wines logo" />
        <p> finder </p>   
        <Routes>
          <Route path='/' element={<LandingPage /> } />
          <Route path='/quiz' element={<Question setAnswers={setAnswers}/>} />
          <Route path='/match' element={ <Match answers={answers}/> } />
        </Routes>
    </div>
  );
}

export default App;


