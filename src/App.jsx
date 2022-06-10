import "./App.scss";
import characters from "./data/characters";
import CharacterCard from "./components/CharacterCard";

function App() {
  const createCharacterCards = () => {
    const characterCards = characters.map((character, index) => {
      const { name, image, house, ancestry, patronus, actor } = character;

      const characterKeys = Object.keys(character);
      const characterValues = Object.values(character);
      console.log(characterKeys);
      console.log(characterValues);

      return image ? (
        <CharacterCard
          name={name}
          image={image}
          house={house}
          ancestry={ancestry}
          patronus={patronus}
          actor={actor}
          key={index}
        />
      ) : (
        ""
      );
    });
    return characterCards;
  };

  const characterCardsJSX = createCharacterCards();

  return (
    <div className="app">
      <h1>You're a Wizard Harry!</h1>
      <h2>I'm a what?</h2>
      <div className="app__grid">{characterCardsJSX}</div>
    </div>
  );
}

export default App;
