import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function NewGames() {
  const [newGames, setNewGames] = useState([]);
  const navigate = useNavigate();

  const getNewGames = () => {
    fetch(baseUrl + "/games/new")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        setNewGames(data.results);
      });
  };

  useEffect(() => {
    getNewGames();
  }, []);

  return (
    <div>
      <ul>
        <h3>New Games</h3>
        {newGames.map((results) => {
          return (
            <li key={results.id}>
              <p>{results.name}</p>
              <img src={results.background_image}></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
