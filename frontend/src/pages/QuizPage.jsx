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

  /* GET QUESTIONS */

  const quizQuestions =
    questions[category] || [];

  /* STATES */

  const [
    currentQuestion,
    setCurrentQuestion
  ] = useState(0);

  const [
    selected,
    setSelected
  ] = useState("");

  const [
    score,
    setScore
  ] = useState(0);

  const [
    timeLeft,
    setTimeLeft
  ] = useState(30);

  /* EMPTY */

  if(quizQuestions.length === 0){

    return (

      <div className="empty-page">

        <h1>
          No Questions Found
        </h1>

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
        prev => prev + 1
      );

      setSelected("");

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

  const handleAnswer = (option)=>{

    setSelected(option);

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

      <div className="quiz-wrapper">

        {/* TOP */}

        <div className="quiz-top">

          <div>

            <p className="quiz-category">

              {category} Quiz

            </p>

            <h2 className="quiz-counter">

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

        {/* QUESTION CARD */}

        <div className="quiz-card">

          <h1 className="quiz-question">

            {question.question}

          </h1>

          <div className="quiz-options">

            {question.options.map(
              (option,index)=>(

                <button
                  key={index}

                  onClick={()=>
                    handleAnswer(option)
                  }

                  className={`
                    quiz-option
                    ${
                      selected === option
                      ? "selected-option"
                      : ""
                    }
                  `}
                >

                  {option}

                </button>

              )
            )}

          </div>

        </div>

      </div>

    </div>

  );

}

export default QuizPage;