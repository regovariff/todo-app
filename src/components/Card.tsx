import React from "react";

// Define the ButtonProps interface for any additional props
interface CardProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {children}
    </div>
  )
}

export default Card;
