import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../utils/QuizComponent.css";
import { useAuth } from "../contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [noData, setNoData] = useState(false);
  const [timer, setTimer] = useState(15); // 15 seconds
  const [answers, setAnswers] = useState([]);
  const { user: authUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch questions from the API
    const fetchQuestions = async () => {
      try {
        const response = await axios.post(
          "https://bharuchbaps.in/bharuchbaps.in/index.php/quiz/get_questions",
          {
            shibir_id: authUser?.id,
          }
        );
        console.log(response.data, "response.data-----");
        if (!response.data.status) {
          setNoData(true);
          return;
        }
        setQuestions(response.data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, [authUser]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          handleNextQuestion();
          return 15;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentQuestionIndex]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = useCallback(() => {
    console.log(selectedOption, "---selectedOption");
    if (selectedOption) {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          shibir_id: authUser?.id,
          quiz: "1",
          id: questions[currentQuestionIndex].id,
          selected_option: selectedOption,
        },
      ]);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
      setTimer(15); // Reset timer to 15 seconds
    } else {
      // Final answer for the last question
      //   alert("You have completed the quiz!");
    }
  }, [currentQuestionIndex, questions?.length, selectedOption, questions]);

  const handleSubmitAnswers = async () => {
    try {
      await axios.post(
        "https://bharuchbaps.in/bharuchbaps.in/index.php/quiz/post_answers",
        answers
      );
      toast.success("Answers submitted successfully!");
      navigate("/score");
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  console.log(questions, "-----****** setQuestions");
  if (noData) {
    navigate("/score");

    return;
  } else if (questions?.length === 0) {
    return <div>Loading...</div>;
  }
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2 className="quiz-question">{currentQuestion?.question}</h2>
      <div className="quiz-radio-group">
        {[1, 2, 3, 4].map(
          (num) =>
            currentQuestion[`option_${num}`] && (
              <label
                key={num}
                className={`quiz-radio-label ${selectedOption === num.toString() ? "selected" : ""
                  }`}
              >
                <input
                  type="radio"
                  value={num}
                  checked={selectedOption === num.toString()}
                  onChange={handleOptionChange}
                  className="quiz-radio-input"
                />
                {currentQuestion[`option_${num}`]}
              </label>
            )
        )}
      </div>
      <div className="quiz-buttons">
        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={handleNextQuestion} className="quiz-button">
            Next
          </button>
        ) : (
          <button onClick={handleSubmitAnswers} className="quiz-button">
            Submit Answers
          </button>
        )}
      </div>
      <div className="quiz-timer">
        <CircularProgressbar
          value={(timer / 15) * 100}
          text={`${timer}s`}
          styles={buildStyles({
            pathColor: `rgba(62, 152, 199, ${timer / 15})`,
            textColor: "#000",
            trailColor: "#d6d6d6",
            textSize: 30,
            backgroundColor: "#f5f5f5",
          })}
        />
      </div>
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default QuizComponent;
