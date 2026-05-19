import {
  useParams,
  useNavigate
} from "react-router-dom";

import {
  useState
} from "react";

import questions
from "../utils/questions";

import Timer
from "../components/quiz/Timer";

import ProgressBar
from "../components/quiz/ProgressBar";

function QuizPage() {

  const { category } =
    useParams();

  const navigate =
    useNavigate();

  /* FILTER QUESTIONS */

  const quizQuestions =
    questions.filter(
      (q)=>
        q.category?.toLowerCase()
        ===
        category?.toLowerCase()
    );

  /* STATES */

  const [
    currentQuestion,
    setCurrentQuestion
  ] = useState(0);

  const [
    selectedAnswer,
    setSelectedAnswer
  ] = useState("");

  const [
    score,
    setScore
  ] = useState(0);

  const [
    timeLeft,
    setTimeLeft
  ] = useState(30);

  /* NO QUESTIONS */

  if(quizQuestions.length===0){

    return (

      <div
        style={{
          minHeight:"100vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          color:"white",
          fontSize:"30px"
        }}
      >

        No Questions Found

      </div>

    );

  }

  const question =
    quizQuestions[currentQuestion];

  /* NEXT QUESTION */

  const nextQuestion = ()=>{

    if(
      currentQuestion + 1
      < quizQuestions.length
    ){

      setCurrentQuestion(
        currentQuestion + 1
      );

      setSelectedAnswer("");

      setTimeLeft(30);

    }else{

      navigate("/result",{

        state:{
          score,
          total:
          quizQuestions.length,
          category
        }

      });

    }

  };

  /* ANSWER */

  const handleAnswer =
  (option)=>{

    setSelectedAnswer(option);

    if(
      option === question.answer
    ){

      setScore(
        prev => prev + 1
      );

    }

    setTimeout(()=>{

      nextQuestion();

    },800);

  };

  return (

    <div className="quiz-page">

      <div className="quiz-container">

        {/* TOP */}

        <div className="quiz-top">

          <div>

            <p className="quiz-category">

              {category} Quiz

            </p>

            <h2 className="quiz-count">

              Question
              {" "}
              {currentQuestion + 1}
              {" "}
              /
              {" "}
              {quizQuestions.length}

            </h2>

          </div>

          <Timer
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            onTimeUp={nextQuestion}
          />

        </div>

        {/* PROGRESS */}

        <ProgressBar
          current={currentQuestion + 1}
          total={quizQuestions.length}
        />

        {/* CARD */}

        <div className="quiz-card">

          <h1 className="quiz-question">

            {question.question}

          </h1>

          <div className="quiz-options">

            {question.options?.map(
              (option,index)=>(

              <button
                key={index}

                onClick={()=>
                  handleAnswer(option)
                }

                className={`
                  quiz-option
                  ${
                    selectedAnswer
                    === option
                    ? "selected-option"
                    : ""
                  }
                `}
              >

                {option}

              </button>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}

export default QuizPage;