import { Link } from "react-router-dom";

const CharactersByHero = ({ full_name, characters }) => {
  return full_name === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  full_name,
  first_appearance,
  characters,
  image,
}) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={image} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{full_name}</p>

              <CharactersByHero full_name={full_name} characters={characters} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
