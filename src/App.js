import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "8924ad02";
  const APP_KEY = "cf2e68dc3e8c15cb20f2e7f6da27560a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("apple");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="main-title">
        <i className="fas fa-apple-alt"></i> Recipe Finder
      </h1>
      <p className="main-subtitle">
        Find Your Favorite Recipe <i className="far fa-hand-pointer"></i>
      </p>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={parseInt(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            totalTime={recipe.recipe.totalTime}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
