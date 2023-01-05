import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { HeroBio } from "../components/HeroBio";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const heroes = getHeroById(id);



  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!heroes) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      {heroes.map((hero) => (
        <HeroBio key={hero.id} {...hero} />
      ))}
      <div>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
