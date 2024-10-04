
import React from 'react';


interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className="short-bio-button bg-[#FABC3F] border border-none text-white py-[10px] px-[25px] rounded-[30px]  text-base mt-[70px] inline-block">
      {text}
    </div>
  );
};

export default Button;
