import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Basket from "./components/Basket.jsx";
import ProductList from "./components/Product.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/product" element={<ProductList />} />
            </Routes>
        </Router>
    );
}

export default App;