import React from "react";

export const HeroBio = ({
  name,
  superhero,
  full_name,
  first_appearance,
  publisher,
  occupation,
  image,
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
        </ul>

        <h5 className="mt-3">Occupation</h5>
        <p>{occupation}</p>
      </div>
    </>
  );
};
