import { Link } from "react-router-dom";

function Navigation() {
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
      </ul>
    </nav>
  );
}

export default Navigation;
