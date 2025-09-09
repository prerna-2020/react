import React from "react";

function AnswerItem({ ans, keyIn, questionKey, correctAns, handleSelect }) {
  return (
    <li key={`q${questionKey}_opt${keyIn}`}>
      <span>
        <input
          type="radio"
          name={questionKey}
          value={`option_${keyIn + 1}`}
          data-answer={keyIn == correctAns ? true : false}
          onChange={(e) => handleSelect(e)}
        />
      </span>
      <span>{ans}</span>
    </li>
  );
}

export default React.memo(AnswerItem);
