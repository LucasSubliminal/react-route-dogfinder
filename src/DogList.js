// DogList.js
import React from "react";
import { Link } from "react-router-dom";
import { dogs } from "./DogData";

function DogList() {
  return (
    <div>
      <h1>Meet Our Dogs!</h1>
      <ul>
        {dogs.map(dog => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>
              {dog.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
