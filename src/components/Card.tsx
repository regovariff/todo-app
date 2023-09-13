import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #48494b;
  color: #fff;
  border-radius: 15px;
  padding: 40px 100px;
  margin: 20px 0;
  position: relative;
  text-align: left;
`;

interface CardProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      {children}
    </StyledCard>
  )
}

export default Card;
