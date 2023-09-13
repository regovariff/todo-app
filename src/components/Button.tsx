import React from "react";
import styled from "styled-components";

// Define the button's styles using styled-components
const StyledButton = styled.button`
  background-color: grey;
  color: #fff;
  font-size: 16px;
  margin-top: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Define the ButtonProps interface for any additional props
interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Create the Button component
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
