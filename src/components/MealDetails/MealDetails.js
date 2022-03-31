import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMeal from "../../SingleMeal/SingleMeal";

const MealDetails = () => {
  const { mealId } = useParams();
  const [meals, setMeal] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
`;
      fetch(url)
      .then(res=> res.json())
      .then(data=> setMeal(data.meals))
  }, []);
    return (
      <div className="">
    
        {meals.map((meal) => (
          <SingleMeal key={meal.idMeal} meal={meal}></SingleMeal>
        ))}
      </div>
    );
};

export default MealDetails;
