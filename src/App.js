import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Registration from "./Component/Register";
import Login from "./Component/Login";
import Home from "./Component/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
