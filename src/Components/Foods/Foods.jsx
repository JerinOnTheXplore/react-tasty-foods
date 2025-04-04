import React, { use, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'
const Foods = ({foodsPromise}) => {
    const foods = use(foodsPromise)
    const [selectOrdered,setSelectOrdered]=useState([]);

    const handleOrdered = (meal)=>{
       console.log('clicked selected',meal);
       const newSelectOrdered =[...selectOrdered,meal];
       setSelectOrdered(newSelectOrdered);

    }

    console.log(foods)
    return (
        <div>
           <h2>Today's Selection: {foods.meals.length}</h2>
           <h2>Setected List: {selectOrdered.length}</h2>
           <ol>
            {
                selectOrdered.map(meal=> <li>{meal.strMeal}</li>)
            }
           </ol>
           <div className='foods'>
           {
            foods.meals.map(meal=><Food meal={meal}
            key={meal.idMeal}
            handleOrdered={handleOrdered}
            ></Food>)
           } 
           </div>
        </div>
    );
};

export default Foods;