
import React from 'react';


interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="short-bio-button bg-[#FABC3F] border border-none text-white py-[10px] px-[25px] rounded-[30px] cursor-pointer text-base mt-[70px] block">
      {text}
    </button>
  );
};

export default Button;
