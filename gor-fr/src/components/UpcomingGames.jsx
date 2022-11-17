import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function UpcomingGames() {
  const [upcomingGames, setUpcomingGames] = useState([]);
  const navigate = useNavigate();

  const getUpcomingGames = () => {
    fetch(baseUrl + "/games/upcoming")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        setUpcomingGames(data.results);
      });
  };

  useEffect(() => {
    getUpcomingGames();
  }, []);

  return (
    <div>
      <ul>
        <h3>Upcoming Games</h3>
        {upcomingGames.map((results) => {
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
