import { useState } from "react";
import quizData from "../JSON/quizData";
import Modal from "@/components/atom/modal/Modal";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import QuizResult from "./quizResult";
import QuizScoreModal from "./quizScoreModal";
const Quiz = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [modal, setModal] = useState(false);
  const [quizCompleted , setQuizCompleted] = useState(false);
  const [warning , setWarning] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

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
    setSelectedAnswer("");
  };
  const handlePrevClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedAnswer("");
  };
  const handleNextClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer("");
  };
  const handleSubmit =()=>{
    if(Object.keys(selectedAnswers).length < quizData.questions.length){
        setWarning(true)
    }
    else{
        setModal(true)
    }
  }
  const closeModal = () => {
    navigate("/");
  };
  return (
    <div className="">
         {!quizCompleted ?(
            <>
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="mt-20 ml-5 w-full max-w-lg shadow-lg rounded-lg p-8 ">
       
        <p className="font-semibold ml-1 flex">
          <span>{currentQuestionIndex + 1}. </span>
          {currentQuestion.question}
        </p>
        {Object.entries(currentQuestion.options)?.map(([key, option]) => (
          <div key={key} className="option ">
            <Button
              className={`optionButton my-2 whitespace-normal shadow-none w-full p-7 ${
                selectedAnswer === key
                  ? "bg-blue-400 text-white hover:bg-blue-500"
                  : "bg-red-50 hover:bg-red-100"
              } hover:border-black ${key === selectedAnswers[currentQuestionIndex] && "bg-yellow-200"}`}
              onClick={() => {
                setSelectedAnswer(key);
              }}
            >
              {option}
            </Button>
          </div>
        ))}
        <Modal
          isOpen={modal}
          onClose={closeModal}
          title="Quiz Completed"
          primarybutton
          primaryValue="Close"
          primaryAction={closeModal}
          secondarybutton
          secondaryValue="Results"
          secondaryAction={()=>setQuizCompleted(true)}
          classname="mt-20 ml-5 shadow-lg"
        >
          <QuizScoreModal score={score}/>
          <div className="flex justify-center ">
          <div className="mt-20 flex flex-col justify-center items-center rounded-full bg-yellow-100 w-36 h-36 border-4 border-red-300 "
          >
            <p className="text-orange-300 font-bold mt-5">SCORE</p>
            <div className="bg-blue-300 rounded-b-full  h-20 w-full mt-7  flex justify-center items-center ">
            <p className="text-3xl font-bold  ">{score}</p>
            </div>
          </div>
          </div>
        </Modal>
        <Modal
        classname="min-h-[200px]"
        isOpen={warning}
        onClose={()=>setWarning(false)}
        title="You Didn't Attend All The Questions"
        primarybutton
        primaryValue="Continue Quiz"
        primaryAction={()=>setWarning(false)}
        secondarybutton
        secondaryValue="Submit"
        secondaryAction={()=>{setWarning(false); setModal(true)}}
        >
            <p></p>
        </Modal>
        <div className="flex flex-col">
          <div className=" flex justify-between items-center">
            <Button
              onClick={() => {
                handleSave();
              }}
              variant="default"
              size="default"
              disabled={!selectedAnswer}
              className="text-black font-bold  bg-orange-400 hover:bg-orange-500 hover:border-none"
            >
              SAVE
            </Button>

            <div className=" flex justify-center items-center">
              <Button
                onClick={() => handlePrevClick()}
                variant="secondary"
                size="default"
                disabled={currentQuestionIndex === 0}
                className="m-2 bg-yellow-100 hover:bg-yellow-50 hover:border-black"
              >
                <ChevronLeft />
              </Button>
              <Button
                onClick={() => handleNextClick()}
                variant="secondary"
                disabled={
                  currentQuestionIndex === quizData.questions.length - 1
                }
                className="m-2 bg-yellow-100 hover:bg-yellow-50 hover:border-black"
              >
                <ChevronRight size={20} />
              </Button>
            </div>

            <Button onClick={handleSubmit} size="default"
            className="bg-orange-400 hover:bg-orange-500 hover:border-none text-black font-bold"
            >
              SUBMIT
            </Button>
          </div>
          <div className="grid grid-cols-5">
            {questionNumbers.map((number) => (
              <Button
                key={number}
                onClick={() => {
                  setCurrentQuestionIndex(number - 1);
                  setSelectedAnswer("");
                }}
                variant="outline"
                size="sm"
                className={`p-2 m-2 ${
                  selectedAnswers[number - 1]
                    ? "bg-green-400 hover:bg-green-400 text-white"
                    : "bg-slate-200 hover:bg-slate-200"
                } ${currentQuestionIndex === number - 1 ? "bg-blue-400  hover:bg-blue-400 " : ""}hover:border-black`}
              >
                {number}
              </Button>
            ))}
          </div>
        </div></div>
        </div>
        </>
        ):<QuizResult selectedAnswers={selectedAnswers} questionNumbers={questionNumbers}/>}
    
    </div>
  );
};

export default Quiz;
