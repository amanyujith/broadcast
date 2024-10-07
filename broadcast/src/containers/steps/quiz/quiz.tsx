import { useState } from "react"
import quizData from "../JSON/quizData";
import Modal from "@/components/atom/modal/Modal";
import { useNavigate } from "react-router-dom";
const  Quiz =()=> {
    const navigate = useNavigate();
    const [score , setScore] = useState(0);
    const [currentQuestionIndex , setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer , setSelectedAnswer] = useState("");
    const [modal , setModal] = useState(false)
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const handleSave = ()=>{
            if(selectedAnswer===currentQuestion.answer){
                setScore(score+1)
            }
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
    <div  className="mt-20 ml-5">
    <p>{currentQuestion.question}</p>
        {Object.entries(currentQuestion.options)?.map(([key, option]) => (
          <div key={key}>
            <input
              type="radio"
              name="answer"
              value={key}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              checked={selectedAnswer === key}
            />
            <label>{`${key}: ${option}`}</label>
          </div>
        ))}
    <button onClick={handleSave} className="bg-slate-300">Save</button>
    <Modal
        isOpen={modal}
        onClose={closeModal}
        title="Quiz Completed"
        primarybutton
        primaryValue="Close"
        primaryAction={closeModal}
        classname="min-h-5"
      >
        <p className="text-center">Your total score is: {score+1}</p>
      </Modal>
  </div>
  
  )
}

export default Quiz