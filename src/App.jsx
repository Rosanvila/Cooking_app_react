import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://www.themealdb.com/api.php");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input type="text" placeholder="Search for a recipe" />
      <button>Search</button>
    </div>
  );
};

export default App;
