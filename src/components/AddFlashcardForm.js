import React, { useState } from "react";

const AddFlashcardForm = ({ onAdd }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && answer) {
      onAdd({ question, answer });
      setQuestion("");
      setAnswer("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-flashcard-form">
      <div>
        <label htmlFor="question">Question:</label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="answer">Answer:</label>
        <input
          id="answer"
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default AddFlashcardForm;
