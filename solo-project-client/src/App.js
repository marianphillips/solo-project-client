import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header"
import Question from "./components/Question";
import LandingPage from "./components/LandingPage";
import Match from "./components/Match";
const blank = require("./data/blank");

function App() {
  const [answers, setAnswers] = useState(blank);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/quiz'
          element={<Question answers={answers} setAnswers={setAnswers} />}
        />
        <Route path='/match' element={<Match answers={answers} setAnswers={setAnswers} />} />
      </Routes>
    </div>
  );
}

export default App;
