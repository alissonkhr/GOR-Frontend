import { Route, Routes } from "react-router-dom";
import GameContextProvider from "./context/GameContext";
import GameDetailContextProvider from "./context/GameDetailContext";
import GamesContainer from "./components/GamesContainer";
import GameDetailsContainer from "./components/GameDetailsContainer";
import Login from "./components/Login";
import Register from "./components/Register";
import Navi from "./components/Navi";
import Logout from "./components/Logout";
import Test from "./components/Test";

export default function App() {
  return (
    <div className="App">
      <Navi />
      <Logout />
      <Routes>
        <Route path="/logged_in" element={<Test />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/games"
          element={
            <GameContextProvider>
              <GamesContainer />
            </GameContextProvider>
          }
        />
        <Route
          path="/games/details/:id"
          element={
            <GameDetailContextProvider>
              <GameDetailsContainer />
            </GameDetailContextProvider>
          }
        />
      </Routes>
    </div>
  );
}
