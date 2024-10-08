import { useState } from "react"
import quizData from "../JSON/quizData";
import Modal from "@/components/atom/modal/Modal";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button/button";
const  Quiz =()=> {
    const navigate = useNavigate();
    const [score , setScore] = useState(0);
    const [currentQuestionIndex , setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer , setSelectedAnswer] = useState("");
    const [modal , setModal] = useState(false)
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const questionNumbers = Array.from({ length: quizData.questions.length }, (_, i) => i + 1);

    const handleSave = ()=>{
        console.log("saveee");
        console.log("se",selectedAnswer);
        console.log('cu', currentQuestion.answer);
        console.log("score1",score);
            if(selectedAnswer===currentQuestion.answer){
                console.log("score",score);
                setScore(score+1);
                
            }
            else{
                setScore(score-1)
            }
            console.log("score22222",score);
            
            if(currentQuestionIndex < quizData.questions.length-1){
                setCurrentQuestionIndex(currentQuestionIndex+1)
            }else{
                setModal(true);
            }
            setSelectedAnswer("")
    }
    const closeModal = () => {
        navigate('/')
      };
  return (
    <div className="flex justify-center items-center w-full h-screen ">
    <div  className="mt-20 ml-5 w-full max-w-lg shadow-lg rounded-lg p-8">
    <p><span>{currentQuestionIndex + 1}. </span>{currentQuestion.question}</p>
        {Object.entries(currentQuestion.options)?.map(([key, option]) => (
          <div key={key} className="option ">
            <Button className={`optionButton my-2 whitespace-normal shadow-none w-full p-7 ${
    selectedAnswer === key ? 'bg-blue-400 text-white hover:bg-blue-500' : 'bg-red-50 hover:bg-red-100'
  } hover:border-black  `}
            onClick={()=>setSelectedAnswer(key)}
            >
                {option}
            </Button>
            {/* <input
              type="radio"
              name="answer"
              value={key}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              checked={selectedAnswer === key}
            />
            <label>{`${key}: ${option}`}</label> */}
          </div>
        ))}
    {/* <button onClick={handleSave} className="bg-slate-300"  disabled={!selectedAnswer}>Save</button> */}
    <Button onClick={()=>{handleSave()}}
        variant="default"
        size="default"
        disabled={!selectedAnswer}
        className="text-black font-bold  bg-white"
        >
        SAVE
    </Button>
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
      
      {/* <button onClick={()=>setCurrentQuestionIndex(currentQuestionIndex-1)} className="bg-slate-300">Prev</button> */}
      <Button 
                onClick={() => {setSelectedAnswer(""); setCurrentQuestionIndex(currentQuestionIndex - 1)
                   } }
                variant="secondary"
                size="default"
                disabled={currentQuestionIndex === 0} 
                className="m-2 bg-yellow-100"
            >
                Prev
            </Button>
            <Button 
                onClick={() => {setSelectedAnswer(""); setCurrentQuestionIndex(currentQuestionIndex + 1)}} 
                variant="secondary"
                size="default"
                disabled={currentQuestionIndex === quizData.questions.length-1} 
                className="m-2 bg-yellow-100"
            >
                Next
            </Button>
      {questionNumbers.map((number)=>(
        <Button 
        key={number} 
        onClick={() => setCurrentQuestionIndex(number - 1)} 
        variant="outline"
        size="sm"
        className={`bg-slate-300 p-2 ${currentQuestionIndex === number - 1 ? "bg-blue-400" : ""} m-2`}
    >
        {number}
    </Button>
      ))}
  </div>
  </div>
  )
}

export default Quiz