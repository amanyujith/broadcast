import quizData from "../JSON/quizData";
interface ScoreProps {
  score: number;
}
const QuizScoreModal = ({ score }: ScoreProps) => {
  const totalQuestion = quizData.questions.length;
  const regionValue = totalQuestion / 3;
  let progressColor = "bg-blue-300";
  if (score > regionValue * 2) {
    progressColor = "bg-red-300";
  } else if (score > regionValue) {
    progressColor = "bg-green-300";
  }
  const progressPercentage = (score / totalQuestion) * 100;

  return (
    <div className=" w-full h-8 bg-gray-200 mt-5">
      <div
        className={`${progressColor} h-full`}
        style={{ width: `${progressPercentage}%` }}
      >
      </div>
      <div className="flex justify-between">
        <span>0</span>
        <span className="text-blue-500 ">AVERAGE</span>
        <span className="text-green-500">GOOD</span>
        <span className="text-red-500">EXCELLENT</span>
      </div>
    </div>
  );
};
export default QuizScoreModal;
