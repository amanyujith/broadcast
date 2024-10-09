import { Button } from "@/components/ui/button/button"
import quizData from "../JSON/quizData";
import { useNavigate } from "react-router-dom";
interface QuizResultsProps {
    selectedAnswers :{[key:number]:string};
    questionNumbers:number[]
}
const QuizResult = ({selectedAnswers , questionNumbers}:QuizResultsProps) =>{
// const QuizResult: React.FC<QuizResultsProps> = ({ selectedAnswers, questionNumbers }) => {

    const navigate = useNavigate();
    return <div className="   w-full   flex justify-center items-center ">
    <div className=" mt-20 mb-10 rounded-lg shadow-lg w-full max-w-lg  p-5">
    {quizData.questions.map((question,index)=>(
        <div key={index}> 
            <p className="font-semibold">
                <span>{questionNumbers[index]}.</span>
                {question.question}</p>
            {Object.entries(question.options).map(([key,option])=>(
                <div key={key} className=" ">
                    <Button className={`${selectedAnswers[index]===key ? 'bg-red-400 hover:bg-red-400 hover:border-white':'hover:bg-blue-100 hover:border-white bg-blue-100'}
                     ${question.answer===key && 'bg-green-400 hover:bg-green-400'} my-2 whitespace-normal shadow-none w-full p-5`}>
                        {option}
                    </Button>
                </div>
            ))}
        </div>
    ))}
     <Button onClick={()=>navigate('/')} className="font-bold hover:bg-orange-300 bg-orange-400 hover:border-black">
        DONE
     </Button>
    </div>
   
    </div>
}
export default QuizResult;