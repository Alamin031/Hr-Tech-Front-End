import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/customer/view_all__product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {products.map((ProductEntity) => (
        <div key={ProductEntity.id} className="w-1/3 p-4">
          <ProductCard ProductEntity={ProductEntity} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
