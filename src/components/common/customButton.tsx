import React from 'react';
import { CustomButtonTypes } from '@/types/commonTypes/button';

interface CustomButtonProps extends CustomButtonTypes {}

const CustomButton: React.FC<CustomButtonProps> = ({
  outline,
  onClick,
  background,
  textColor,
  padding,
  borderRadius,
  cursor,
  children,
  textSize,
}) => {
  const buttonStyle = {
    outline: outline || 'none',
    background: background || '#F5BD02',
    padding: padding || '10px 20px',
    borderRadius: borderRadius || '20px',
    cursor: cursor || 'pointer',
    color: textColor || '#1E1E1E',
    fontSize: textSize || '1rem',
  };

  return (
    <button className="center font-bold" onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
};

export default CustomButton;
