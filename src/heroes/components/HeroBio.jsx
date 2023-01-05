import React from "react";

export const HeroBio = ({
  name,
  superhero,
  full_name,
  first_appearance,
  publisher,
  occupation,
  image,
  placeOfBirth,
  alignment,
  groupAffiliation,
  relatives,
  race,
}) => {
  return (
    <>
      <div className="col-4">
        <img src={image} alt={name} className="img-thumbnail " />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Full name:</b> {full_name}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {first_appearance}
          </li>
          <li className="list-group-item">
            <b>Place of Birth:</b> {placeOfBirth}
          </li>
          <li className="list-group-item">
            <b>Group Affiliation:</b> {groupAffiliation}
          </li>
          <li className="list-group-item">
            <b>Relatives:</b> {relatives}
          </li>
        </ul>

        <h5 className="mt-3">Occupation</h5>
        <p>{occupation}</p>
        <h5 className="mt-3">Alignment</h5>
        <p>{alignment}</p>
        <h5 className="mt-3">Race</h5>
        <p>{race}</p>
      </div>
    </>
  );
};
