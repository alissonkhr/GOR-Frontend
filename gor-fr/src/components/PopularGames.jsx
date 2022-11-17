import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function PopularGames() {
  const [popularGames, setPopularGames] = useState([]);
  const navigate = useNavigate();

  const getPopularGames = () => {
    fetch(baseUrl + "/games/popular")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        setPopularGames(data.results);
      });
  };

  useEffect(() => {
    getPopularGames();
  }, []);

  return (
    <div>
      <ul>
        <h3>Popular Games</h3>
        {popularGames.map((results) => {
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
