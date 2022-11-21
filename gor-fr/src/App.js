import { Route, Routes } from "react-router-dom";
import GamesContainer from "./components/GamesContainer";
import Login from "./components/Login";
import Register from "./components/Register";
import Navi from "./components/Navi";
import Logout from "./components/Logout";

export default function App() {

  return (
    <div className="App">
      <Navi />
      <Logout />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/games" element={<GamesContainer />} />
      </Routes>
    </div>
  );
}
