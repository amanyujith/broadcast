import React from 'react';
import { useNavigate } from 'react-router-dom';


interface StatisticCardProps {
  value: string;
  label: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ value, label }) => {
  const navigate = useNavigate();
  return (
    <div className="stat-card bg-white p-5 rounded-[10px] text-center flex-1 my-0 mx-[10px]">
      <h2 className='text-[#C7253E] text-[2rem] mb-[5px] cursor-pointer' onClick={()=>{label==='Score'&&navigate('/score')}}>{value}</h2>
      <p className='text-[#999] text-base '>{label}</p>
    </div>
  );
};

export default StatisticCard;
