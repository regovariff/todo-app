import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../App.css";
import InputContainer from "../components/InputContainer";

function SignUp() {
  interface User {
    name: string;
    email: string;
    password: string;
  }

  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const navigate = useNavigate();

  const users = useMemo(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  }, []);

  useEffect(() => {
    // Save the form data to local storage whenever it changes
    localStorage.setItem("users", JSON.stringify(users));
  }, [user, users]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (name && email && password) {
        const newUser = { name, email, password };
        const updatedUsers = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        navigate("/sign-in");
      } else {
        throw new Error("Invalid registration details");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={onSubmit}>
          <InputContainer>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              required
            />
          </InputContainer>
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
          <Button onClick={onSubmit}>Sign Up</Button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
