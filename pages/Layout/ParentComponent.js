// import React, { useState } from 'react';
// import Header from './header'; // Import your Header component
// import ProductDetails from './ProductDetails'; // Import your ProductDetails component
// import Layout from './Layout/layout'; // Import your Layout component

// const ParentComponent = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   return (
//     <Layout>
//       <Header cartItems={cartItems} />
//       {/* Render other content */}
//       <ProductDetails product={yourProductData} addToCart={addToCart} />
//     </Layout>
//   );
// };

// export default ParentComponent;

// ParentComponent.js
import React, { useState } from 'react';
import Header from './header';
import ProductDetails from './Component/ProductDetails';

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const productData = {
    Product_Name: 'Sample Product',
    Description: 'This is a sample product description.',
    Price: 100.0,
    imageURL: '/sample-image.jpg'
  };

  return (
    <div>
      <Header cartItems={cartItems} />
      <ProductDetails product={productData} addToCart={addToCart} />
    </div>
  );
};

export default ParentComponent;



