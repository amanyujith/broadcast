// import { useState } from "react";
// import quizData from "../JSON/quizData";
// import Modal from "@/components/atom/modal/Modal";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// const Quiz = () => {
//   const navigate = useNavigate();
//   const [score, setScore] = useState(0);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState("");
//   const [modal, setModal] = useState(false);
//   const [selectedAnswers, setSelectedAnswers] = useState<{
//     [key: number]: string;
//   }>({});

//   // const [isSaveDisabled , setIsSaveDisabled] = useState(false) ;
//   const currentQuestion = quizData.questions[currentQuestionIndex];
//   const questionNumbers = Array.from(
//     { length: quizData.questions.length },
//     (_, i) => i + 1,
//   );

//   const handleSave = () => {
//     console.log("saveee");
//     console.log("se", selectedAnswer);
//     console.log("cu", currentQuestion.answer);
//     console.log("score1", score);
//     const isCorrect = selectedAnswer === currentQuestion.answer;
//     const wasCorrectBefore =
//       selectedAnswers[currentQuestionIndex] === currentQuestion.answer;

//     if (isCorrect) {
//       if (!wasCorrectBefore) {
//         setScore(score + 1);
//       }
//     } else {
//       if (wasCorrectBefore) {
//         setScore(score - 1);
//       }
//     }

//     setSelectedAnswers({
//       ...selectedAnswers,
//       [currentQuestionIndex]: selectedAnswer,
//     });
//     console.log("score22222", score);

//     if (currentQuestionIndex < quizData.questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//     // setIsSaveDisabled(false);
//     setSelectedAnswer("");
//   };
//   const handlePrevClick = () => {
//     //   setIsSaveDisabled(false);
//     setCurrentQuestionIndex(currentQuestionIndex - 1);
//     setSelectedAnswer("");
//   };
//   const handleNextClick = () => {
//     //   setIsSaveDisabled(false);
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//     setSelectedAnswer("");
//   };
//   const closeModal = () => {
//     navigate("/");
//   };
//   return (
//     <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-[#FDCAB5] to-[#FFF]">
//       <div className="mt-20 ml-5 w-full max-w-lg shadow-lg rounded-lg p-8 flex flex-col justify-between h-[600px]">
//         <p className="h-8">
//           <span>{currentQuestionIndex + 1}. </span>
//           {currentQuestion.question}
//         </p>
//         <div className="options">
//         {Object.entries(currentQuestion.options)?.map(([key, option]) => (
//           <div key={key} className="option ">
//             <Button
//               className={`optionButton my-2 whitespace-normal shadow-none w-full p-7 ${
//                 selectedAnswer === key
//                   ? "bg-blue-400 text-white hover:bg-blue-500"
//                   : "bg-red-50 hover:bg-red-100"
//               } hover:border-black ${key === selectedAnswers[currentQuestionIndex] && "bg-yellow-200"}`}
//               onClick={() => {
//                 setSelectedAnswer(key);
//               }}
//             >
//               {option}
//             </Button>
//           </div>
//         ))}
//         </div>

//         <Modal
//           isOpen={modal}
//           onClose={closeModal}
//           title="Quiz Completed"
//           primarybutton
//           primaryValue="Close"
//           primaryAction={closeModal}
//           classname="min-h-5"
//         >
//           <p className="text-center">Your total score is: {score}</p>
//         </Modal>

//         <div className="flex flex-col">
//           <div className=" flex justify-between items-center">
//             <Button
//               onClick={() => {
//                 handleSave();
//               }}
//               variant="default"
//               size="default"
//               disabled={!selectedAnswer}
//               className="text-black font-bold  bg-white"
//             >
//               SAVE
//             </Button>

//             <div className=" flex justify-center items-center">
//               <Button
//                 onClick={() => handlePrevClick()}
//                 variant="secondary"
//                 size="default"
//                 disabled={currentQuestionIndex === 0}
//                 className="m-2 bg-yellow-100 rounded-full"
//               >
//                 <ChevronLeft size={20} className="absolute"/>
//               </Button>
//               <Button
//                 onClick={() => handleNextClick()}
//                 variant="secondary"
//                 disabled={
//                   currentQuestionIndex === quizData.questions.length - 1
//                 }
//                 className="m-2 bg-yellow-100 rounded-full"
//               >
//                 <ChevronRight size={20} className="absolute"/>
//               </Button>
//             </div>

//             <Button onClick={() => setModal(true)} size="default">
//               Submit
//             </Button>
//           </div>
//           <div className="question-bar grid grid-cols-5 shadow-xl rounded bg-neutral-100 mt-5 p-2">
//             {questionNumbers.map((number) => (
//               <Button
//                 key={number}
//                 onClick={() => {
//                   setCurrentQuestionIndex(number - 1);
//                   setSelectedAnswer("");
//                 }}
//                 variant="outline"
//                 size="sm"
//                 className={`p-2 m-2 ${
//                   selectedAnswers[number - 1]
//                     ? "bg-green-400 text-white"
//                     : "bg-slate-300"
//                 } ${currentQuestionIndex === number - 1 ? "bg-blue-400 text-white" : ""}`}
//               >
//                 {number}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;

import { useState } from "react";
import quizData from "../JSON/quizData";
import Modal from "@/components/atom/modal/Modal";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ThirtySecCounter from "../ThirtySecCounter";
const Quiz = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  // const [isSaveDisabled , setIsSaveDisabled] = useState(false) ;
  const currentQuestion = quizData.questions[currentQuestionIndex];
  const questionNumbers = Array.from(
    { length: quizData.questions.length },
    (_, i) => i + 1,
  );

  const handleSave = () => {
    console.log("saveee");
    console.log("se", selectedAnswer);
    console.log("cu", currentQuestion.answer);
    console.log("score1", score);
    const isCorrect = selectedAnswer === currentQuestion.answer;
    const wasCorrectBefore =
      selectedAnswers[currentQuestionIndex] === currentQuestion.answer;

    if (isCorrect) {
      if (!wasCorrectBefore) {
        setScore(score + 1);
      }
    } else {
      if (wasCorrectBefore) {
        setScore(score - 1);
      }
    }

    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: selectedAnswer,
    });
    console.log("score22222", score);

    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    // setIsSaveDisabled(false);
    setSelectedAnswer("");
  };


  const handlePrevClick = () => {
    //   setIsSaveDisabled(false);
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedAnswer("");
  };


  const handleNextClick = () => {
    //   setIsSaveDisabled(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer("");
  };


  const closeModal = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    setModal(true);
  }
 return (
  <div className="flex justify-center items-center w-full min-h-screen bg-[#D3EE98]">
    <div className="svg-div absolute bottom-0 w-full h-2/3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="">
        <path
          fill="#FEFF9F"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="w-full h-full bg-[#FEFF9F]"></div>
    </div>

    
   
    <div className=" relative quiz-box z-10 mt-20 ml-5 w-full max-w-lg shadow-lg rounded-3xl p-8 flex flex-col justify-between h-[600px] bg-white outline outline-1 outline-offset-2 outline-[#A0D683]">
    <div className="absolute w-full -top-14 left-0">
      <ThirtySecCounter currentQuestionIndex={currentQuestionIndex} handleSave={handleSave} handleSubmit={handleSubmit}/>
    </div> 
    
      <div className="quiz-header text-center mb-4">
        <p className="h-8 text-lg font-semibold text-gray-700">
          <span>{currentQuestionIndex + 1}. </span>
          {currentQuestion.question}
        </p>
      </div>
      <div className="options">
        {Object.entries(currentQuestion.options)?.map(([key, option]) => (
          <div key={key} className="option">
            <Button
              className={`option-button my-2 whitespace-normal shadow-none w-full p-5 ${
                selectedAnswer === key
                  ? "bg-[#72BF78] text-white hover:bg-[#72BF78]"
                  : "bg-[#FEFF9F] hover:bg-white"
              } hover:border-black ${key === selectedAnswers[currentQuestionIndex] && "bg-[#A0D683]"}`}
              onClick={() => {
                setSelectedAnswer(key);
              }}
            >
              {option}
            </Button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modal}
        onClose={closeModal}
        title="Quiz Completed"
        primarybutton
        primaryValue="Close"
        primaryAction={closeModal}
        classname="min-h-5"
      >
        <p className="text-center">Your total score is: {score}</p>
      </Modal>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          
          <Button
            onClick={() => setModal(true)}
            size="default"
            className="bg-[#FFAD60] text-black hover:bg-[#f17827] hover:text-white hover:border-none"
          >
            Submit
          </Button>

          <div className="flex justify-center items-center">
            <Button
              onClick={() => handlePrevClick()}
              variant="secondary"
              size="default"
              disabled={currentQuestionIndex === 0}
              className="m-2 bg-[#FEFF9F] rounded-full"
            >
              <ChevronLeft size={20} className="absolute" />
            </Button>
            <Button
              onClick={() => handleNextClick()}
              variant="secondary"
              disabled={currentQuestionIndex === quizData.questions.length - 1}
              className="m-2 bg-[#FEFF9F] rounded-full"
            >
              <ChevronRight size={20} className="absolute" />
            </Button>
          </div>
          <Button
            onClick={() => {
              handleSave();
            }}
            variant="default"
            size="default"
            disabled={!selectedAnswer}
            className="font-bold bg-[#48A14C] text-white hover:bg-[#3C3D37] hover:border-white"
          >
            Save
          </Button>
          
        </div>
        <div className="question-bar grid grid-cols-5 shadow-xl rounded-3xl border border-[#A0D683] bg-[#fcfcfc] mt-5 p-2">
          {questionNumbers.map((number) => (
            <Button
              key={number}
              onClick={() => {
                setCurrentQuestionIndex(number - 1);
                setSelectedAnswer("");
              }}
              variant="outline"
              size="sm"
              className={`question-number p-2 m-2 hover:border-black ${
                selectedAnswers[number - 1]
                  ? "bg-[#72BF78] text-white border-[#FEFF9F] border-[4px]"
                  : "bg-[#B7E5B4]"
              } ${currentQuestionIndex === number - 1 ? "bg-[#A0D683] text-white" : ""}`}
            >
              {number}
            </Button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

};

export default Quiz;
