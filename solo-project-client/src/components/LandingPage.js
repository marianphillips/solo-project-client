import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate()

    const takeQuiz = () => {
        navigate('/quiz')
    }

    return (
        <>
        <p>Find your perfect bottle at Pacific Wines through a few quick questions</p>
        <button onClick={takeQuiz}>take the quiz</button>
        </>
    );
  }
  
  export default LandingPage;