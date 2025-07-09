import { useState } from "react";

function Basket() {
    const [cartItems, setCartItems] = useState([]); // boş başlayacak

    const addToCart = () => {
        setCartItems([
            {
                id: 1,
                name: "Haziran Kampanyası",
                type: "Sütlü",
                price: 420,
                quantity: 1,
            },
        ]);
    };

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

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div style={{ padding: "1rem", fontFamily: "Arial" }}>
            <h2 style={{ textAlign: "center" }}>BASKET</h2>

            {cartItems.length === 0 ? (
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <img
                        src="https://i.imgur.com/qs7FZfW.png"
                        alt="empty-cart"
                        style={{ width: "150px", marginBottom: "1rem" }}
                    />
                    <h3>Your Shopping Cart is Empty</h3>
                    <p>Discover the latest products now</p>
                    <button
                        style={{
                            backgroundColor: "#2c3e50",
                            color: "white",
                            border: "none",
                            padding: "0.5rem 1rem",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                        onClick={addToCart}
                    >
                        Discover Products
                    </button>
                </div>
            ) : (
                <>
                    <div style={{ marginTop: "2rem" }}>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    borderBottom: "1px solid #ccc",
                                    padding: "1rem 0",
                                }}
                            >
                                <div>
                                    <strong>{item.name}</strong>
                                    <div style={{ color: "#888" }}>{item.type}</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        style={{
                                            backgroundColor: "green",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "50%",
                                            width: "30px",
                                            height: "30px",
                                            fontSize: "18px",
                                            marginRight: "10px",
                                        }}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQuantity(item.id)}
                                        style={{
                                            backgroundColor: "green",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "50%",
                                            width: "30px",
                                            height: "30px",
                                            fontSize: "18px",
                                            marginLeft: "10px",
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                                <div style={{ color: "#f39c12", fontWeight: "bold" }}>
                                    ₺ {item.price}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: "2rem", textAlign: "center" }}>
                        <button
                            style={{
                                width: "100%",
                                backgroundColor: "green",
                                color: "white",
                                padding: "1rem",
                                fontSize: "16px",
                                borderRadius: "8px",
                                border: "none",
                            }}
                        >
                            Complete (₺ {total.toFixed(2)})
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Basket;
