import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContext";

const Cards = ({ fCategory }) => {
  const [meals, setMeals] = useState([]);
  const { searchQuery } = useContext(SearchContext);

  useEffect(() =>{
    let url;
    if (searchQuery) {
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
    } else if (fCategory) {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${fCategory}`;
    } else {
      url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    }

    axios
      .get(url)
      .then((response) => {
        const sortedMeals = response.data.meals.sort((a, b) =>
          a.strMeal.localeCompare(b.strMeal)
        );
        setMeals(sortedMeals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fCategory, searchQuery]);

  return (
    <div>
      <h1>Résultat de la recherche : {searchQuery}</h1>
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
