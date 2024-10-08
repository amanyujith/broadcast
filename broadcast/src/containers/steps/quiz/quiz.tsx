import { useState } from "react"
import quizData from "../JSON/quizData";
import Modal from "@/components/atom/modal/Modal";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
const  Quiz =()=> {
    const navigate = useNavigate();
    const [score , setScore] = useState(0);
    const [currentQuestionIndex , setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer , setSelectedAnswer] = useState("");
    const [modal , setModal] = useState(false);
    // const [correctAnswers , setCorrectAnswers] = useState<{ [key: number]: boolean }>({});
    const [correctAnswers, setCorrectAnswers] = useState<{ [key: number]: string }>({});


    // const [isSaveDisabled , setIsSaveDisabled] = useState(false) ;
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const questionNumbers = Array.from({ length: quizData.questions.length }, (_, i) => i + 1);

    const handleSave = ()=>{
        console.log("saveee");
        console.log("se",selectedAnswer);
        console.log('cu', currentQuestion.answer);
        console.log("score1",score);
            // if(selectedAnswer===currentQuestion.answer){
            //     console.log("score",score);
            //     setScore(score+1);
                
            // }
            // else{
            //     setScore(score)
            // }
            const isCorrect = selectedAnswer === currentQuestion.answer;
            // const wasCorrectBefore = correctAnswers[currentQuestionIndex];
            setCorrectAnswers({
                ...correctAnswers,
                [currentQuestionIndex]:selectedAnswer
            });

            if(isCorrect){
                if(!correctAnswers[currentQuestionIndex]){
                    setScore(score+1)
                }
            }
            else{
                if(correctAnswers[currentQuestionIndex]){
                    setScore(score-1)
                }
            }
            
            console.log("score22222",score);
            
            if(currentQuestionIndex < quizData.questions.length-1){
                setCurrentQuestionIndex(currentQuestionIndex+1)
            }
            // setIsSaveDisabled(false);
            setSelectedAnswer("")
    }
    const handlePrevClick = () => {
       
        //   setIsSaveDisabled(false);
          setCurrentQuestionIndex(currentQuestionIndex - 1); 
          setSelectedAnswer("")
        
      };
      const handleNextClick = () => {
      
        //   setIsSaveDisabled(false);
          setCurrentQuestionIndex(currentQuestionIndex + 1); 
          setSelectedAnswer("")
     
      };
    const closeModal = () => {
        navigate('/')
      };
  return (
    <div className="flex justify-center items-center w-full h-screen ">
    <div  className="mt-20 ml-5 w-full max-w-lg shadow-lg rounded-lg p-8">
    <p><span>{currentQuestionIndex + 1}. </span>{currentQuestion.question}</p>
        {Object.entries(currentQuestion.options)?.map(([key, option]) => (
          <div key={key} className="option ">
            <Button  className={`optionButton my-2 whitespace-normal shadow-none w-full p-7 ${
        selectedAnswer === key
          ? 'bg-blue-400 text-white hover:bg-blue-500' 
          : correctAnswers[currentQuestionIndex] === key
          ? 'bg-green-400 text-white hover:bg-green-500' 
          : 'bg-red-50 hover:bg-red-100' 
      } hover:border-black`}
            onClick={()=>{setSelectedAnswer(key); }}
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
    {/* <button onClick={handleSave} className="bg-slate-300"  disabled={!selectedAnswer}>Save</button> */}
    <div className="flex flex-col">
        <div className=" flex justify-between items-center">
    <Button onClick={()=>{handleSave() }}
        variant="default"
        size="default"
        disabled={!selectedAnswer}
        className="text-black font-bold  bg-white"
        >
        SAVE
    </Button>
    
      
      {/* <button onClick={()=>setCurrentQuestionIndex(currentQuestionIndex-1)} className="bg-slate-300">Prev</button> */}
      <div className=" flex justify-center items-center">
      <Button 
                 onClick={()=>handlePrevClick()}
                variant="secondary"
                size="default"
                disabled={currentQuestionIndex === 0} 
                className="m-2 bg-yellow-100"
            >
                <ChevronLeft/>
            
            </Button>
            <Button 
                onClick={()=>handleNextClick()} 
                variant="secondary"
                
                disabled={currentQuestionIndex === quizData.questions.length-1} 
                className="m-2 bg-yellow-100"
            >
               
                <ChevronRight size={20}
                />
            </Button>
            </div>

            <Button onClick={()=>setModal(true)} 
            size="default"
            >
                Submit
            </Button>
            </div>
            <div className="grid grid-cols-5">
      {questionNumbers.map((number)=>(
        <Button 
        key={number} 
        onClick={() => {setCurrentQuestionIndex(number - 1);setSelectedAnswer("")}} 
        variant="outline"
        size="sm"
        className={`p-2 m-2 ${
            correctAnswers[number - 1] 
              ? "bg-green-400 text-white"
              : "bg-slate-300"
            } ${currentQuestionIndex === number - 1 ? "bg-blue-400 text-white" : ""}`}
    >
        {number}
    </Button>
      ))}
      </div>
      </div>
  </div>
  </div>
  )
}

export default Quiz