// DogDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { dogs } from "./DogData";

function DogDetails() {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name);

  if (!dog) return <p>Dog not found!</p>;

  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Back to All Dogs</Link>
    </div>
  );
}

export default DogDetails;
