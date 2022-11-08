import React, { useEffect, useState } from "react";

const StarWars = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchStarWarsAPI = async () => {
      const response = await fetch("https://swapi.dev/api/planets");
      return response.json();
    };
    fetchStarWarsAPI().then((response) => {
      setPlanets(response.results);
    });
  }, []);

  console.log(planets);
  return (
    <div>
      {planets.map((entry, index) => {
        return (
          <p>
            {index + 1}. {entry.name}
          </p>
        );
      })}
    </div>
  );
};

export default StarWars;
