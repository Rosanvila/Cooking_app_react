import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResetButton from "./ResetButton";

const Categories = ({ onSelectCategory, onResetCategory, setSearchQuery }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSelecedCategory = (category) => {
    onSelectCategory(category);
    setSearchQuery("");
    navigate(`/?categories=${category}`);
  };

  return (
    <div>
      <h1>Categories</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {categories.map((mainMeal) => (
          <button
            key={mainMeal.idCategory}
            onClick={() => handleSelecedCategory(mainMeal.strCategory)}
          >
            {mainMeal.strCategory}
          </button>
        ))}
      </div>
      <ResetButton setSelectedCategory={onResetCategory} />
    </div>
  );
};

export default Categories;
