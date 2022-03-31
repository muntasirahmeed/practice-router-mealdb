
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Headar from './components/Header/Headar';
import Home from './components/Home/Home';
import Meal from './components/Meal/Meal';
import MealDetails from './components/MealDetails/MealDetails';
import NotFound from './components/NotFound/NotFound';
import Resturent from './components/Resturent/Resturent';

function App() {
  return (
    <div className="bg-gray-300 h-100">
      <Headar></Headar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/resturent' element={<Resturent></Resturent>}></Route>
        <Route path='/meal/:mealId' element={ <MealDetails></MealDetails>}></Route>
        
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
