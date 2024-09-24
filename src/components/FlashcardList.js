// import React from "react";
// import Flashcard from "./Flashcard";
// // import "./FlashcardList.css";

// const FlashcardList = ({ flashcards, currentIndex }) => {
//   return (
//     <div className="flashcard-list">
//       {flashcards.map((flashcard, index) => (
//         <Flashcard
//           key={index}
//           flashcard={flashcard}
//           style={{
//             zIndex: index === currentIndex ? 1 : 0,
//             transform: `translate(-50%, -50%) translate(${index * 10}px, ${
//               index * 10
//             }px)`,
//             position: "absolute",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default FlashcardList;
import React from "react";
import Flashcard from "./Flashcard";
// import "./FlashcardList.css"; // Import CSS if needed

const FlashcardList = ({ flashcards, currentIndex, onRemove }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard, index) => (
        <Flashcard
          key={index}
          flashcard={flashcard}
          style={{
            zIndex: index === currentIndex ? 1 : 0,
            transform: `translate(-50%, -50%) translate(${index * 10}px, ${
              index * 10
            }px)`,
            position: "absolute",
          }}
          onRemove={onRemove} // Pass the onRemove function
        />
      ))}
    </div>
  );
};

export default FlashcardList;
