import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductCard from "./components/ProductCard";
import CartPage from './components/cartPage';

function App() {
  return (
	<BrowserRouter>
	<div>
	  <Navbar />
	  <Routes>
		<Route exact path='/' element={<ProductCard /> }/>
		<Route path='/cart' element={<CartPage />}/>
	  </Routes>
    </div>
	</BrowserRouter>
    
  );
}

export default App;
