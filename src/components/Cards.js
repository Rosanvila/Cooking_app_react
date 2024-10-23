import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ fCategory }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const url = fCategory
          ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${fCategory}`
          : "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        const response = await axios.get(url);
        setMeals(response.data.meals);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeals();
    }, [fCategory]);

    useEffect(() => {
    setMeals((prevMeals) => 
      [...prevMeals].sort((a, b) => a.strMeal.localeCompare(b.strMeal))
    );
    }, [meals]);

  return (
    <div>
      <h1>Recipe Cards</h1>
      <div className="card-container">
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
