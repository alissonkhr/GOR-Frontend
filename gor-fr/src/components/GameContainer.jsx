import { useNavigate } from "react-router-dom";

export default function GameContainer(props) {
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        {props.games.map((results) => {
          return <li key={results.id}>{results.name}</li>;
        })}
      </ul>
    </div>
  );
}
