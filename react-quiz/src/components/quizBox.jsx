import { useState, createContext } from "react";
import QuizItem from "./quizItem";
import { useCallback } from "react";

function QuizBox({ data }) {
  const [quizAnswer, setQuizAnswer] = useState([]);
  const [score, setScore] = useState(null);

  const handleSelect = useCallback((e) => {
    let id = Number(e.target.name);
    let selValue = e.target.value;
    let isCorrect = e.target.dataset.answer;

    setQuizAnswer((prev) => {
      const index = prev.findIndex((item) => item.id === id);

      if (index !== -1) {
        // Update existing entry
        const updated = [...prev];
        updated[index] = { id, selValue, isCorrect };
        return updated;
      } else {
        // Add new entry
        return [...prev, { id, selValue, isCorrect }];
      }
    });
  }, []);

  const submitQuiz = () => {
    let correctAnswer = quizAnswer.filter((i) => {
      if (i.isCorrect == "true") return i;
    });

    setScore(correctAnswer.length);
  };

  const retakeTest = () => {
    setQuizAnswer([]);
    setScore(null);
    let allInput = document.querySelectorAll("input[type=radio]");
    allInput.forEach((element) => {
      element.checked = false;
    });
  };

  return (
    <main>
      <ul className="questionBox">
        {data.map((item) => {
          console.log("data map");
          return <QuizItem item={item} handleSelect={handleSelect} />;
        })}
      </ul>
      {score != null ? (
        <div className="scoreBoard">
          <p>
            Attempted question : {quizAnswer.length}
            Correct Answers : {score}
          </p>
          <button type="button" onClick={retakeTest}>
            Retake Test
          </button>
        </div>
      ) : (
        <button type="button" onClick={submitQuiz}>
          Submit Test
        </button>
      )}
    </main>
  );
}

export default QuizBox;
