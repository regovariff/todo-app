import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";

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
      <h1>Profile</h1>
      <Button
        onClick={onLogout}
      >
        Logout
      </Button>
      <br />
      <div>
        <h2>Name: {userData.name}</h2>
        <h2>Email: {userData.email}</h2>
      </div>
    </>
  );
}

export default Profile;
