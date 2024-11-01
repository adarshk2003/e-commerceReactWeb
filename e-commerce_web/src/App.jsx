import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/LoginComponent/Login";
import Signup from "./components/LoginComponent/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
