import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import TodoPage from "./pages/TodoPage";

import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/sign-in" />} />
            {/* <Route path="/sign-up" element={<SignUp />} /> */}
            {/* <Route path="/sign-in" element={<SignIn />} /> */}
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/todopage" element={<TodoPage />} /> */}
          </Routes>
        </Router>
      </TodoProvider>
    </>
  );
}

export default App;
