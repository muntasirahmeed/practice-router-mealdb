import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Meal = (props) => {
  console.log(props.meal);
  const { idMeal, strMealThumb, strMeal } = props.meal;
   const navigate = useNavigate();

   const showFriendDetail = () => {
     navigate("/meal/" + idMeal);
   };
  const mealName = strMeal < 20 ? strMeal : strMeal.slice(0, 20);
  return (
    <div
      className={`flex flex-col items-center bg-slate-50 w-[300px] rounded-lg space-y-2 mx-auto`}
    >
      <img
        className="w-[280px] rounded-lg m-[10px]"
        src={strMealThumb}
        alt=""
      />
      <h1 className="text-2xl">{mealName}</h1>
      <div className=" flex space-x-6">
        <span className=" block bg-green-500 px-4 py-1 text-white rounded-full mb-6">
          {" "}
          <Link to={"/meal/" + idMeal}>Link</Link>
        </span>
        <button
          onClick={showFriendDetail}
          className="bg-transparent text-green-600 outline outline-green-500  px-4 py-1 rounded-full  hover:outline-none focus:outline-offset-2 focus:ring-2  hover:bg-green-600 hover:text-white mb-6 "
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Meal;