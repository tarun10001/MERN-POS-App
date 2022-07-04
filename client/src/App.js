import 'antd/dist/antd.css';
import {Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Items from './pages/Items';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/home" element={<Homepage />}></Route>
      <Route path="/items" element={<Items />}></Route>
      <Route path="/home/items/:id" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
     </Routes>
    </div>
  );
}

export default App;