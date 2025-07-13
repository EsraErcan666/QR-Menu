import { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h2>Ürünler</h2>
            <ul>
                {products.map(p => (
                    <li key={p._id}>{p.name} - {p.price}₺</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;