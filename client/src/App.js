import 'antd/dist/antd.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Homepage from './pages/Homepage';
import Items from './pages/Items';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Bills from './pages/Bills';
import Customers from './pages/Customers';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/home" element={<ProtectedRoute><Homepage /></ProtectedRoute>}></Route>
      <Route path="/items" element={<ProtectedRoute><Items /></ProtectedRoute>}></Route>
      <Route path="/home/items/:id" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>}></Route>
      <Route path="/bills" element={<ProtectedRoute><Bills /></ProtectedRoute>}></Route>
      <Route path="/customers" element={<ProtectedRoute><Customers /></ProtectedRoute>}></Route>


      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Login />}></Route>
     </Routes>
    </div>
  );
}

export default App;

export function ProtectedRoute({children}) {

if (localStorage.getItem('pos-user')) {
  return children;
}
else {
  return <Navigate to='/login' />
}
}