import React, { useState } from 'react';
import './Food.css'
const Food = ({meal,handleOrdered}) => {
    // console.log(meal)
    // console.log(handleOrdered)
    const [ordered,setOrdered]=useState(false);
    const handleOrderedMeals= ()=>{
        setOrdered(!ordered);
        handleOrdered(meal);
    }
    return (
        <div className={`food ${ordered && 'card'}`}>
        <img className='food-img' src={meal.strMealThumb} alt="" />
        <h2>Flavours to try: {meal.strMeal} </h2>
        <button onClick={handleOrderedMeals}>{ordered ? 'Selected':'Select Now'}</button>
        
        </div>
    );
};

export default Food;