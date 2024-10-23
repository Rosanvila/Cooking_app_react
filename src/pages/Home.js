import React, { useState } from "react";
import Cards from "../components/Cards";
import Categories from "../components/Categories";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const resetCategory = () => {
    setSelectedCategory("");
  };

  return (
    <div className="meals-container">
      <h1>React Cooking App</h1>
      <Categories
        onSelectCategory={setSelectedCategory}
        onResetCategory={resetCategory}
      />
      <Cards fCategory={selectedCategory} />
    </div>
  );
};


export default Home;