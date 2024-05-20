import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function SingleProductPage() {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>

            <img height="200px" src={product.images[1]} alt="" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.brand}</p>
            <p>Category: ${product.category}</p>
            <p>Stock: ${product.stock}</p>
            <p>Discount: ${product.discountPercentage}</p>
            <p>Rating: ${product.rating}</p>
            <button>Add to cart</button>
            <button>Buy Now</button>
        </div>

    );
}
