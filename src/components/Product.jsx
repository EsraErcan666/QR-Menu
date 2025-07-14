import { useEffect, useState } from 'react';
import '../css/Product.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="background-product">
            <div className="product-header">
                <h2>Ürünler</h2>
            </div>
            <div className="product-list">
                {products.map((p) => (
                    <div className="product-item" key={p._id}>
                        <div className="product-image-area">
                            {/* Ürün resmi varsa göster */}
                            {p.image_url ? (
                                <img src={`http://localhost:3001${p.image_url}`} alt={p.name} className="product-image" />
                            ) : (
                                <div className="product-image-placeholder">Resim Yok</div>
                            )}
                        </div>
                        <div className="product-info">
                            <span className="product-name">{p.name}</span>
                            <span className="product-price">{p.price}₺</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;