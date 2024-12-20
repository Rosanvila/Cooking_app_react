import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => {
        setMeal(response.data.meals[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idMeal]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <NavLink to="/" className="remove">
        <p>Back</p>
      </NavLink>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>Ingredients</h2>
      <ul>
        {Object.keys(meal)
          .filter((key) => key.includes("strIngredient") && meal[key])
          .map((key) => (
            <li key={key}>
              {meal[key]} - {meal[`strMeasure${key.slice(13)}`]}
            </li>
          ))}
      </ul>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Recipe;
