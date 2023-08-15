// import { useRouter } from 'next/router';
// import ProductDetails from './ProductDetails';

// const ProductPage = () => {
//   // Get the 'productId' parameter from the router query
//   const router = useRouter();
//   const { productId } = router.query; // 'productId' is the key from the route

//   // Fetch product details using the 'productId' parameter (implement this)
//   // For now, I'm using sample data to simulate fetching
//   const productDetails = {
//     id: productId,
//     Product_Name: 'Sample Product',
//     Product_Image: '/sample-image.jpg',
//     Description: 'Sample description...',
//     // Add more product details here
//   };

//   return (
//     <div>
//       <h1>Product Details</h1>
//       {/* Pass the fetched product details to the 'ProductDetails' component */}
//       <ProductDetails product={productDetails} />
//       {/* Implement order options or other content here */}
//     </div>
//   );
// };

// export default ProductPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ProductDetails from './ProductDetails';

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        console.log("data");
        const response = await axios.get(`http://localhost:3000/customer/searchproduct/${productId}`);
        console.log(response);
        setProductDetails(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  return (
    <div>
      <h1>Product Details</h1>
      {productDetails ? (
        <ProductDetails product={productDetails} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
