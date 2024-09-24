// // // // import React, { useState } from "react";
// // // // import FlashcardList from "./component/FlashcardList";
// // // // import "./App.css";

// // // // const App = () => {
// // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // //   const flashcards = [
// // // //     {
// // // //       question: "What is React?",
// // // //       answer: "A JavaScript library for building user interfaces",
// // // //     },
// // // //     { question: "What is JSX?", answer: "A syntax extension for JavaScript" },
// // // //     { question: "What is a component?", answer: "A reusable piece of UI" },
// // // //   ];

// // // //   const handleNext = () => {
// // // //     setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
// // // //   };

// // // //   const handlePrevious = () => {
// // // //     setCurrentIndex(
// // // //       (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div className="App">
// // // //       <h1>Flashcard App</h1>
// // // //       <button onClick={handlePrevious}>Previous</button>
// // // //       <button onClick={handleNext}>Next</button>
// // // //       <FlashcardList flashcards={flashcards} currentIndex={currentIndex} />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;
// // // import React, { useState } from "react";
// // // import {
// // //   BrowserRouter as Router,
// // //   Route,
// // //   Switch,
// // //   Redirect,
// // // } from "react-router-dom";
// // // import FlashcardList from "./components/FlashcardList";
// // // import Login from "./components/login";
// // // import "./App.css";

// // // const App = () => {
// // //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   const flashcards = [
// // //     {
// // //       question: "What is React?",
// // //       answer: "A JavaScript library for building user interfaces",
// // //     },
// // //     { question: "What is JSX?", answer: "A syntax extension for JavaScript" },
// // //     { question: "What is a component?", answer: "A reusable piece of UI" },
// // //   ];

// // //   const handleLogin = (credentials) => {
// // //     // Implement login logic here
// // //     console.log("Logging in with:", credentials);
// // //     setIsAuthenticated(true); // Set authenticated status after successful login
// // //   };

// // //   const handleNext = () => {
// // //     setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
// // //   };

// // //   const handlePrevious = () => {
// // //     setCurrentIndex(
// // //       (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
// // //     );
// // //   };

// // //   const handleLogout = () => {
// // //     setIsAuthenticated(false);
// // //   };

// // //   return (
// // //     <Router>
// // //       <div className="App">
// // //         <h1>Flashcard App</h1>
// // //         <Switch>
// // //           <Route path="/login">
// // //             {isAuthenticated ? (
// // //               <Redirect to="/" />
// // //             ) : (
// // //               <Login onLogin={handleLogin} />
// // //             )}
// // //           </Route>
// // //           <Route path="/">
// // //             {isAuthenticated ? (
// // //               <>
// // //                 <button onClick={handleLogout}>Logout</button>
// // //                 <button onClick={handlePrevious} disabled={currentIndex === 0}>
// // //                   Previous
// // //                 </button>
// // //                 <button
// // //                   onClick={handleNext}
// // //                   disabled={currentIndex === flashcards.length - 1}
// // //                 >
// // //                   Next
// // //                 </button>
// // //                 <FlashcardList
// // //                   flashcards={flashcards}
// // //                   currentIndex={currentIndex}
// // //                 />
// // //               </>
// // //             ) : (
// // //               <Redirect to="/login" />
// // //             )}
// // //           </Route>
// // //         </Switch>
// // //       </div>
// // //     </Router>
// // //   );
// // // };

// // // export default App;
// // import React, { useState } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Route,
// //   Routes,
// //   Navigate,
// // } from "react-router-dom";
// // import FlashcardList from "./components/FlashcardList";
// // import Login from "./components/login";
// // import "./App.css";

// // const App = () => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const flashcards = [
// //     {
// //       question: "What is React?",
// //       answer: "A JavaScript library for building user interfaces",
// //     },
// //     { question: "What is JSX?", answer: "A syntax extension for JavaScript" },
// //     { question: "What is a component?", answer: "A reusable piece of UI" },
// //   ];

// //   const handleLogin = (credentials) => {
// //     // Implement login logic here
// //     console.log("Logging in with:", credentials);
// //     setIsAuthenticated(true); // Set authenticated status after successful login
// //   };

// //   const handleNext = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
// //   };

// //   const handlePrevious = () => {
// //     setCurrentIndex(
// //       (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
// //     );
// //   };

// //   const handleLogout = () => {
// //     setIsAuthenticated(false);
// //   };

// //   return (
// //     <Router>
// //       <div className="App">
// //         <h1>Flashcard App</h1>
// //         <Routes>
// //           <Route
// //             path="/login"
// //             element={
// //               isAuthenticated ? (
// //                 <Navigate to="/" />
// //               ) : (
// //                 <Login onLogin={handleLogin} />
// //               )
// //             }
// //           />
// //           <Route
// //             path="/"
// //             element={
// //               isAuthenticated ? (
// //                 <>
// //                   <button onClick={handleLogout}>Logout</button>
// //                   <button
// //                     onClick={handlePrevious}
// //                     disabled={currentIndex === 0}
// //                   >
// //                     Previous
// //                   </button>
// //                   <button
// //                     onClick={handleNext}
// //                     disabled={currentIndex === flashcards.length - 1}
// //                   >
// //                     Next
// //                   </button>
// //                   <FlashcardList
// //                     flashcards={flashcards}
// //                     currentIndex={currentIndex}
// //                   />
// //                 </>
// //               ) : (
// //                 <Navigate to="/login" />
// //               )
// //             }
// //           />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;
// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import FlashcardList from "./components/FlashcardList";
// import Login from "./components/login";
// import AddFlashcardForm from "./components/AddFlashcardForm";
// import "./App.css";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [flashcards, setFlashcards] = useState([
//     {
//       question: "What is React?",
//       answer: "A JavaScript library for building user interfaces",
//     },
//     { question: "What is JSX?", answer: "A syntax extension for JavaScript" },
//     { question: "What is a component?", answer: "A reusable piece of UI" },
//   ]);

//   const handleLogin = (credentials) => {
//     // Implement login logic here
//     console.log("Logging in with:", credentials);
//     setIsAuthenticated(true); // Set authenticated status after successful login
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
//     );
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   const handleAddFlashcard = (newFlashcard) => {
//     setFlashcards([...flashcards, newFlashcard]);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <h1>Flashcard App</h1>
//         <Routes>
//           <Route
//             path="/login"
//             element={
//               isAuthenticated ? (
//                 <Navigate to="/" />
//               ) : (
//                 <Login onLogin={handleLogin} />
//               )
//             }
//           />
//           <Route
//             path="/"
//             element={
//               isAuthenticated ? (
//                 <>
//                   <button onClick={handleLogout}>Logout</button>
//                   <button
//                     onClick={handlePrevious}
//                     disabled={currentIndex === 0}
//                   >
//                     Previous
//                   </button>
//                   <button
//                     onClick={handleNext}
//                     disabled={currentIndex === flashcards.length - 1}
//                   >
//                     Next
//                   </button>
//                   <FlashcardList
//                     flashcards={flashcards}
//                     currentIndex={currentIndex}
//                   />
//                   <AddFlashcardForm onAdd={handleAddFlashcard} />
//                 </>
//               ) : (
//                 <Navigate to="/login" />
//               )
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import FlashcardList from "./components/FlashcardList";
import Login from "./components/login";
import AddFlashcardForm from "./components/AddFlashcardForm";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcards, setFlashcards] = useState([
    {
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces",
    },
    { question: "What is JSX?", answer: "A syntax extension for JavaScript" },
    { question: "What is a component?", answer: "A reusable piece of UI" },
  ]);

  const handleLogin = (credentials) => {
    console.log("Logging in with:", credentials);
    setIsAuthenticated(true); // Set authenticated status after successful login
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
  };

  const handleAddFlashcard = (newFlashcard) => {
    setFlashcards([...flashcards, newFlashcard]);
  };

  const handleRemoveFlashcard = (flashcardToRemove) => {
    setFlashcards(
      flashcards.filter((flashcard) => flashcard !== flashcardToRemove)
    );
  };

  return (
    <Router>
      <div className="App">
        <h1>Flashcard App</h1>
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <>
                  <button onClick={handleLogout}>Logout</button>
                  <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === flashcards.length - 1}
                  >
                    Next
                  </button>
                  <FlashcardList
                    flashcards={flashcards}
                    currentIndex={currentIndex}
                    onRemove={handleRemoveFlashcard}
                  />
                  <AddFlashcardForm onAdd={handleAddFlashcard} />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
