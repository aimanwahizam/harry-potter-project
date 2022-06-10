import React from "react";
import "../components/CharacterCard.scss";

const CharacterCard = (props) => {
  const { name, image, house, ancestry, patronus, actor, key } = props;

  return (
  <div className="card" key={key}>
    <h2 className="card__title">{name}</h2>
    <img src={image} alt={name} className="card__image"/>
    <h3 className="card__house">{house}</h3>
    <h4 className="card__ancestry">Ancestry: {ancestry}</h4>
    <h4 className="card__patronus">Patronus: {patronus}</h4>
    <h5 className="card__actor">Played By: {actor}</h5>
  </div>
  );
};

export default CharacterCard;
