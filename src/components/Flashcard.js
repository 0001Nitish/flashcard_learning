import React, { useState } from "react";
import "./Flashcard.css"; // Ensure this file exists for styling

const Flashcard = ({ flashcard, style, onRemove }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flashcard"
      style={style}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flashcard-inner ${flipped ? "flipped" : ""}`}>
        <div className="flashcard-front">
          <p>{flashcard.question}</p>
        </div>
        <div className="flashcard-back">
          <p>{flashcard.answer}</p>
        </div>
      </div>
      <button
        className="flip-button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from bubbling up to parent div
          setFlipped(!flipped);
        }}
      >
        {flipped ? "Show Question" : "Show Answer"}
      </button>
      <button
        className="remove-button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from bubbling up
          if (onRemove) onRemove(flashcard);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Flashcard;
