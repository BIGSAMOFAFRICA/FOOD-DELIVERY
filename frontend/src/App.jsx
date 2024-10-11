import Navbar from "./components/Navbar/Navbar"; // Correct path
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"; // Change this line
import Cart from "./pages/Cart/cart"; // Ensure this path is correct too
import PlaceOrder from "./pages/placeOrder/placeOrder"; // Ensure this path is correct too
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <> <div className='app'>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/cart' element={<Cart/>} />
     <Route path ='/order' element={<PlaceOrder/>}/> 
    </Routes>
  </div>
  <Footer/></>
   
  )
}

export default App