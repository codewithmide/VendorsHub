import React from 'react';
import { CustomButtonTypes } from '@/types/commonTypes/button';

interface CustomButtonProps extends CustomButtonTypes {}

const CustomButton: React.FC<CustomButtonProps> = ({
  border = 'none',
  onClick,
  background = '#F5BD02',
  textColor = '#1E1E1E',
  padding = '10px 20px',
  borderRadius = '20px',
  cursor = 'pointer',
  children,
  textSize = '1rem',
}) => {
  const buttonStyle = {
    border,
    background,
    padding,
    borderRadius,
    cursor,
    color: textColor,
    fontSize: textSize,
  };

  return (
    <button className="center border font-bold w-full hover:scale-95 transition duration-300" onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
};

export default CustomButton;