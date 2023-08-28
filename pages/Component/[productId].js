import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ProductDetails from './ProductDetails';
import dynamic from "next/dynamic";
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false
})
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
    <>
    <Title page="Product"></Title>
    <div>
      {productDetails ? (
        <ProductDetails product={productDetails} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default ProductPage;
