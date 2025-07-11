import { useState } from "react";
import "../css/Basket.css";
import { useNavigate } from "react-router-dom"; // Ekle

const Basket = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Haziran Kampanyası",
            type: "Sütlü",
            price: 420,
            quantity: 1,
        },
    ]);

    const navigate = useNavigate(); // Hook tanımı

    const increaseQuantity = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const formatPrice = (price) =>
        `${price.toLocaleString("tr-TR")} TL`;

    return (
        <div className="basket-wrapper">
            <div className="basket-container">
                <div className="basket-card">
                    <h2 className="basket-title">🛒 Sepetiniz</h2>

                    {cartItems.length === 0 ? (
                        <div className="basket-empty">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                                alt="empty-cart"
                                className="basket-empty-img"
                            />
                            <h3>Sepetiniz boş</h3>
                            <p>Lütfen ürün ekleyiniz</p>
                            <button
                                className="btn-discover"
                                onClick={() => navigate("/home")}
                            >
                                🛍 Ürünleri Keşfet
                            </button>
                        </div>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <div key={item.id} className="basket-item">
                                    <div className="basket-item-details">
                                        <div>
                                            <strong>{item.name}</strong>
                                            <p className="basket-item-type">{item.type}</p>
                                        </div>
                                        <span className="basket-item-price">
                      {formatPrice(item.price)}
                    </span>
                                    </div>

                                    <div className="basket-item-actions">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            🗑
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="basket-total">
                                <strong>Toplam:</strong> {formatPrice(total)}
                            </div>

                            <div className="basket-buttons">
                                <button className="btn-complete">✅ Siparişi Tamamla</button>
                                <button className="btn-clear" onClick={clearCart}>
                                    🧹 Sepeti Temizle
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Basket;
