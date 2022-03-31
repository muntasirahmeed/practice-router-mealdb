import { data } from 'autoprefixer';
import React from 'react';
import { useEffect, useState} from 'react';
import Meal from '../Meal/Meal';
const Resturent = () => {
    const [sText, setSText] = useState("");
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${sText}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (!data.meals) {
                    setMeals([])
                }
                else {
                    setMeals(data.meals);
                }
            });
    }, [sText]);
    
    const onClickHandler = (e) => {
        const text = e.target.value;
        setSText(text);
    };

    return (
        <div className={`space-y-7 mt-8 `}>
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-2xl md:text-4xl text-green-700">
          Search Your Food
        </h1>
        <input
          type="text"
          className="bg-white px-2 rounded-sm h-8 focus:outline-none focus:ring-2 ring-red-300"
          placeholder="Search Food"
          onChange={onClickHandler}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 mx-10 gap-4">
        {meals.map((meal) => (
          <Meal meal={meal} key={meal.idMeal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Resturent;