
import { Suspense } from 'react'
import './App.css'
import Foods from './Components/Foods/Foods'
const fetchFoods = async ()=>{
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
  return res.json();
}
function App() {
  const foodsPromise = fetchFoods()

  return (
    <>
      
      <h1>A Digital Platter of Deliciousness</h1>
      <Suspense fallback={<h2>Your favourite meals are loading...</h2>}>
        <Foods foodsPromise={foodsPromise}></Foods>
      </Suspense>
      
    </>
  )
}

export default App
