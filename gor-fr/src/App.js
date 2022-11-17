import { Route, Routes, useNavigate } from "react-router-dom";
import GamesContainer from "./components/GamesContainer";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/games" element={<GamesContainer />} />
      </Routes>
    </div>
  );
}
