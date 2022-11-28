import { Route, Routes } from "react-router-dom";
import GameContextProvider from "./context/GameContext";
import GameDetailContextProvider from "./context/GameDetailContext";
import GamesContainer from "./components/GamesContainer";
import GameDetailsContainer from "./components/GameDetailsContainer";
import PostsContainer from "./components/PostsContainer";
import PostContainer from "./components/PostContainer";
import EditForm from "./components/EditForm";
import Login from "./components/Login";
import Register from "./components/Register";
import Navi from "./components/Navi";

export default function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <GameContextProvider>
              <GamesContainer />
            </GameContextProvider>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/records" element={<PostsContainer />} />
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
        <Route path="/records/:id" element={<PostContainer />} />
        <Route path="/edit/:id" element={<EditForm />} />
      </Routes>
    </div>
  );
}
