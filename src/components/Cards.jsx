import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  const listItems = characters.map((character) => (
    <Card
      name={character.name}
      species={character.species}
      gender={character.gender}
      image={character.image}
      onClose={character.onClose}
    >
      {character}
    </Card>
  ));
  return <div>{listItems}</div>;
}
