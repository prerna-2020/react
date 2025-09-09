import AnswerItem from "./answerItem";
import React from "react";

function QuizItem({ item, handleSelect }) {
  return (
    <li key={item.id}>
      <p>
        Q{item.id}&nbsp;
        <span>{item.question}</span>
      </p>
      <ul className="optionBlock">
        {item.options.map((ans, keyIn) => {
          console.log("item map");
          return (
            <AnswerItem
              ans={ans}
              keyIn={keyIn}
              questionKey={item.id}
              correctAns={item.correctAnswers}
              handleSelect={handleSelect}
            />
          );
        })}
      </ul>
    </li>
  );
}

export default React.memo(QuizItem);
