import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputContainer from "../components/InputContainer";
import Button from "../components/Button";

function SignIn() {
  interface User {
    email: string;
    password: string;
  }

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const usersString = localStorage.getItem("users");
      const users: User[] = usersString ? JSON.parse(usersString) : [];
      const matchedUser = users.find(
        (u: User) => u.email === email && u.password === password
      );

      if (matchedUser) {
        // Save logged-in user in localStorage
        localStorage.setItem("loggedUser", JSON.stringify(matchedUser));
        navigate("/profile");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <div>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <InputContainer>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              required
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={onChange}
              required
            />
          </InputContainer>
          <Button onClick={onSubmit}>Login</Button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
