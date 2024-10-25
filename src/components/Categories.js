import axios from "axios";
import React, { useEffect, useState } from "react";
import ResetButton from "./ResetButton";

const Categories = ({ onSelectCategory, onResetCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        await axios
          .get("https://www.themealdb.com/api/json/v1/1/categories.php")
          .then((response) => setCategories(response.data.categories));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

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
            onClick={() => onSelectCategory(mainMeal.strCategory)}
          >
            {mainMeal.strCategory}
          </button>
        ))}
      </div>
      <ResetButton onResetCategory={onResetCategory} />
    </div>
  );
};

export default Categories;
