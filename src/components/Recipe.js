import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const Recipe = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealRecipe = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMealRecipe();
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
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Recipe;
