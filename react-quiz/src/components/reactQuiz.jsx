import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import QuizBox from "./quizBox";
import questions from "../quizData.json";
import { useState } from "react";

function ReactQuiz() {
  const [quizData] = useState(questions.questions);
  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="main">{<QuizBox data={quizData} />}</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ReactQuiz;
