import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Navigation() {
  const navigate = useNavigate();

  const profileClick = () => {
    navigate("/profile")
  }

  const listClick = () => {
    navigate("/todopage")
  }

  return (
    <>
      <div className="navigation-container">
        <Button onClick={profileClick}>Profile</Button>
        <Button onClick={listClick}>ToDo-List</Button>
      </div>
    </>
  );
}

export default Navigation;
