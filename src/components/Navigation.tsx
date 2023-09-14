import { Link, useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };
  return (
    <nav className="navigation-container">
      <ul>
        <li>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/todopage" className="nav-link">
            ToDo-List
          </Link>
        </li>
        <li className="logout" >
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
