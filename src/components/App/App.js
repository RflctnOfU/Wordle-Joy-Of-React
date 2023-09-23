import Game from "../Game";
import Header from "../Header";
import GuessForm from "../GuessForm/GuessForm";

function App() {
  return (
    <div className="wrapper">
      <Header />
      {/* <GuessForm /> */}
      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
