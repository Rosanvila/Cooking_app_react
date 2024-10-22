import React, { useState } from "react";
import Cards from "./components/Cards";
import Categories from "./components/Categories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <Categories onSelectCategory={setSelectedCategory} />
      <Cards fCategory={selectedCategory} />
    </div>
  );
};

export default App;
