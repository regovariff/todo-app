import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import Card from "../components/Card";

function Profile() {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  useEffect(() => {
    // Retrieve user data from local storage
    const loggedUser = localStorage.getItem("loggedUser");

    if (loggedUser) {
      const thisLoggedUser = JSON.parse(loggedUser);

      if (thisLoggedUser) {
        setUserData({ name: thisLoggedUser.name, email: thisLoggedUser.email });
      } else {
        console.log("Invalid user");
      }
    } else {
      console.log("No data");
    }
  }, []);

  return (
    <>
      <div className="nav">
        <Navigation />
      </div>
      <div className="profilepage">
        <h1>Profile</h1>
        <Button onClick={onLogout}>Logout</Button>
        <br />
        <Card>
          <div className="profile-info">
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{userData.name}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{userData.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Profile;
