import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import GameContainer from "./components/GameContainer";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  const getGames = () => {
    fetch(baseUrl + "/games/popular")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        setGames(data.results);
      });
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/games/popular"
          element={<GameContainer games={games} />}
        />
      </Routes>
    </div>
  );
}
