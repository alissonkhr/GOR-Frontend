import React, {createContext, useState, useEffect} from 'react';

export const GameContext = createContext();
let baseUrl = process.env.REACT_APP_BACKEND_URL;

const GameContextProvider = ({children}) => {
  const [doneFetchPopularGames, setDoneFetchPopularGames] = useState(false);
  const [doneFetchUpcomingGames, setDoneFetchUpcomingGames] = useState(false);
  const [doneFetchNewGames, setDoneFetchNewGames] = useState(false);
  const [doneFetchSearchedGames, setDoneFetchSearchedGames] = useState(false);
  const [popularGames, setPopularGames] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);
  const [newGames, setNewGames] = useState([]);
  const [currentQGame, setCurrentQGame] = useState('');
  const [searchedGames, setSearchedGames] = useState([]);

  useEffect(() => getPopularGames(), []);
  useEffect(() => getUpcomingGames(), []);
  useEffect(() => getNewGames(), []);

  const getPopularGames = () => {
    fetch(baseUrl + "/games/popular")
      .then(res => res.json())
      .then(data => {
        setDoneFetchPopularGames(true);
        setDoneFetchSearchedGames(false);
        setPopularGames(data.results)
      })
      .catch(error => console.log(error));
  }
  const getUpcomingGames = () => {
    fetch(baseUrl + "/games/upcoming")
      .then(res => res.json())
      .then(data => {
        setDoneFetchUpcomingGames(true);
        setDoneFetchSearchedGames(false);
        setUpcomingGames(data.results)
      })
      .catch(error => console.log(error));
  }
  const getNewGames = () => {
    fetch(baseUrl + "/games/new")
      .then(res => res.json())
      .then(data => {
        setDoneFetchNewGames(true);
        setDoneFetchSearchedGames(false);
        setNewGames(data.results)
      })
      .catch(error => console.log(error));
  }
  const getSearchedGames = (q_game) => {
    fetch(baseUrl + "/games/" + q_game)
      .then(res => res.json())
      .then(data => {
        setDoneFetchSearchedGames(true);
        setSearchedGames(data.results)
      })
      .catch(error => console.log(error));
  }

  const validateQGame = (e) => {
    let q_game = e.target.value.toLowerCase().trim();
    if(e.type === 'keypress' && e.key === 'Enter') {
      if(q_game && q_game !== currentQGame) {
        setCurrentQGame(q_game);
        setDoneFetchPopularGames(false);
        setDoneFetchUpcomingGames(false);
        setDoneFetchNewGames(false);
        getSearchedGames(q_game);
      }
    }
  }

  return (
    <GameContext.Provider value={{doneFetchPopularGames, doneFetchUpcomingGames, doneFetchNewGames, doneFetchSearchedGames, popularGames, upcomingGames, newGames, searchedGames, validateQGame}}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider;