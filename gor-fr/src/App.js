import { Route, Routes, useNavigate } from "react-router-dom";
import GamesContainer from "./components/GamesContainer";
import Login from "./components/Login";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/games" element={<GamesContainer />} />
      </Routes>
    </div>
  );
}
