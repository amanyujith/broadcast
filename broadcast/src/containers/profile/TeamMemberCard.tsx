import React from 'react';
import Button from './Button';
import StatisticCard from './StatisticCard';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  Score: string;
  experience: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, title, bio, image, Score, experience }) => {
  
  return (
    <div className="team-member-card bg-white rounded-[10px] p-[30px] max-w-full text-left mt-10">
      <div className="team-info">
        <h1 className='text-5xl font-bold text-[#333] mb-[5px] relative z-[1000]'>{name}</h1>
        <p className='text-[#FABC3F] text-2xl mt-4'>{title}</p>
        <Button text="SHORT BIO" />
        <p className="bio mt-6 text-[#666] leading-[1.6] text-xl">{bio}</p>
        <div className="statistics flex justify-between mt-14">
          <StatisticCard value={Score} label="Score" />
          <StatisticCard value={experience} label="Experience" />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
