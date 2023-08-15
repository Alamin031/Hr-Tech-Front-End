import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

function ProductForm() {
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
    <div className="flex flex-col items-center"> {/* Center-align all content */}
      <div className="text-center mb-4"> {/* Center-align the header */}
        <h1 className="text-3xl font-semibold">Featured Products</h1>
        <p className="text-gray-600">Check & Get Your Desired Product!</p>
      </div>
      <div className="flex flex-wrap -mx-2 mt-8"> {/* Add some top margin */}
        {products.map((product) => (
          <div key={product.id} className="w-1/5 p-2">
            <div className="card bg-base-100 shadow-xl h-full">
              <Link href={`/Component/${product.id}`}>
                <img
                  className="p-8 rounded-t-lg"
                  src={`http://localhost:3000/customer/getproductimgbyid/${product.id}`}
                  alt={product.Product_Name}
                />
              </Link>
              <div className="card-body">
                <Link href={`/products/${product.id}`}>
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.Product_Name}
                    <div className="badge badge-secondary">NEW</div>
                  </h5>
                </Link>
                <p>{product.Status}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {product.Price}৳
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">BD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductForm;


