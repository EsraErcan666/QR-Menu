import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx"; // 📌 eklenen satır

import Home from "./components/Home";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Login from "./components/Login";

function App() {
    return (
        <CartProvider> {/* 📌 Tüm uygulamayı sar */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/login" element={<Login />} />   // İsteğe bağlı
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
