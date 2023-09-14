import React from "react";

// Define the ButtonProps interface for any additional props
interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Create the Button component
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
