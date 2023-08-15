import React from 'react';
const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>{product.Product_Name}</h2>
      <img 
                  src={`http://localhost:3000/customer/getproductimgbyid/${product.id}`}
                  alt={product.Product_Name} 
       />
      <p>{product.Description}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetails;
