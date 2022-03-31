import React from 'react';

const SingleMeal = (props) => {
    const { idMeal, strMealThumb, strMeal, strCategory, strInstructions } =
      props.meal;
    console.log(props.meal)
    return (
      <div className="bg-slate-50 flex flex-col items-center rounded-xl p-4 space-y-3">
        <img className="w-80 rounded-xl " src={strMealThumb} alt="" />
        <div className="">
          <h1 className="text-2xl"> {strMeal}</h1>
          <p className="font-semibold">{strCategory}</p>
          <p>Id: {idMeal}</p>
        </div>
        <p>
          {" "}
          InsTruction: <br /> {strInstructions}
        </p>
      </div>
    );
};

export default SingleMeal;