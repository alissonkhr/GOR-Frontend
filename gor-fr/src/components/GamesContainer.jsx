import { useNavigate } from "react-router-dom";
import NewGames from "./NewGames";
import PopularGames from "./PopularGames";
import UpcomingGames from "./UpcomingGames";

export default function GamesContainer() {
  return (
    <div id="allGames">
      <div className="gameContainers">
        <div>
          <NewGames />
        </div>
        <div>
          <PopularGames />
        </div>
        <div>
          <UpcomingGames />
        </div>
      </div>
    </div>
  );
}
