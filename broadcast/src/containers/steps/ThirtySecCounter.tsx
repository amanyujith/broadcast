import { useEffect, useState } from "react";
import quizData from "./JSON/quizData";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface ThirtySecCounterProp {
  currentQuestionIndex: number
  handleSave: () => void
  handleSubmit: () => void
}

const TIME_INTERVAL = 30;
const TOTAL_TIME = TIME_INTERVAL * quizData.questions.length

const ThirtySecCounter = ({currentQuestionIndex, handleSave, handleSubmit}:ThirtySecCounterProp) => {
  const [timeLeft, setTimeLeft] = useState(TIME_INTERVAL);
  const [totalTimeLeft, setTotalTimeLeft] = useState<number>(TOTAL_TIME)

  useEffect(() => {
    setTimeLeft(TIME_INTERVAL);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (!timeLeft) {
      handleSave();
      return;
    };

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    if(!totalTimeLeft) {
      handleSubmit();
      return;
    }

    const totalIntervalId = setInterval(() => {
      setTotalTimeLeft((prevTotalTimeLeft) => prevTotalTimeLeft - 1)
    }, 1000);
     return () => clearInterval(totalIntervalId)
  },[totalTimeLeft]);

  // const formatTime = (time: number) => {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = time % 60 ;

  //   return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, '0')}`
  // }

  const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return (
      <div className="flex flex-col items-center">
        <div className="text-sm font-bold text-gray-700">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        {/* <div className="text-sm">Remaining</div> */}
      </div>
    );
  };

  const progress = (TIME_INTERVAL - timeLeft) / TIME_INTERVAL;

  return (
    <>
      <div className="bg-[#ddd] h-3 w-full">
        <div
          className="h-full bg-[#72BF78] rounded-lg"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <span
      style={{left:`calc(${progress * 100}% - 5px)`}}
      className="bg-[#FEFF9F] absolute -top-[8px] rounded-full h-8 w-8 text-center text-lg transition">
        {timeLeft}
      </span>
      <div
      className={`absolute rounded-full -right-[10px] -top-[18px] bg-[#FFAD60] ${totalTimeLeft % TIME_INTERVAL - 1 === 0 &&('bg-orange-500')}`}
      // style={{ backgroundColor: "#FFAD60" }} // Use the optional background color prop
    >
      <CountdownCircleTimer
        isPlaying
        strokeWidth={5}
        size={50}
        duration={TOTAL_TIME}
        colors={["#72BF78", "#A0D683", "#D3EE98", "#FEFF9F","#FF0000"]}
        colorsTime={[TOTAL_TIME, TOTAL_TIME * 0.75, TOTAL_TIME * 0.5, TOTAL_TIME * 0.25, TOTAL_TIME * 0]}
        onComplete={() => handleSubmit()} 
      >
        {renderTime}
      </CountdownCircleTimer>

    </div>
    </>
  );
};

export default ThirtySecCounter;


