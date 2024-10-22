import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ fCategory }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (fCategory) {
      const fetchMeals = async () => {
        try {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${fCategory}`
          );
          setMeals(response.data.meals);
        } catch (error) {
          console.log(error);
        }
      };

      fetchMeals();
    }
  }, [fCategory]);

  return (
    <div>
      <h1>Recipe Cards</h1>
      <div className="meals-container">
        {meals.map((meal) => (
          <NavLink
            to={`/details/${meal.idMeal}`}
            className="meal-card"
            key={meal.idMeal}
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Cards;
