import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients, totalTime }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ul className={style.list}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p className={style.subtitle}>Calories: {calories}</p>
      <h3 className={style.time}>Total Time: {totalTime} min</h3>
      <img className={style.image} src={image} alt="Image" />
    </div>
  );
};

export default Recipe;
