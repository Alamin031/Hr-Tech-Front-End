// import React, { useState } from 'react';
// import Layout from '../Layout/layout';
// import axios from 'axios';

// const ProductDetails = ({ product }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [shippingAddress, setShippingAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('credit-card');

//   const handleQuantityChange = (event) => {
//     setQuantity(event.target.value);
//   };

//   const handleShippingAddressChange = (event) => {
//     setShippingAddress(event.target.value);
//   };

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };
//   const calculateTotalAmount = () => {
//     return product.Price * quantity;
//   };


//   const handleBuyNow = async () => {
//     const totalAmount = calculateTotalAmount(); // Calculate totalAmount
//     const orderData = {
//       products: product.id,
//       customer: 57,
//       quantity: quantity,
//       shippingAddress: shippingAddress,
//       paymentMethod: paymentMethod,
//       orderStatus: 'pending',// Set orderStatus to 'pending' by default
//       orderDate: new Date().toISOString(), // Convert date to ISO format
//       totalAmount: totalAmount // Set totalAmount


//     };

//     try {
//       const response = await axios.post('http://localhost:3000/customer/addorder', orderData); // Use Axios to make a POST request
//       console.log('Order response:', response.data);
//     } catch (error) {
//       console.error('Error placing order:', error);
//     }
//   };

//   return (
//     <>
//     <Layout>
//     <div className="flex p-4">
//       <div className="w-1/2 p-4">
//         <img
//           src={`http://localhost:3000/customer/getproductimgbyid/${product.id}`}
//           alt={product.Product_Name}
//           className="max-w-full h-auto"
//         />
//       </div>
//       <div className="w-1/2 p-4">
//         <h2 className="text-xl font-bold">{product.Product_Name}</h2>
//         <p className="mt-2">{product.Description}</p>
//         <p className="mt-2">Price: {product.Price}</p>
        
//         {/* Buy Now Form */}
//         <div className="mt-4">
//           <label htmlFor="quantity" className="block font-medium">
//             Quantity:
//           </label>
//           <input
//             type="number"
//             id="quantity"
//             className="mt-1 p-1 border rounded-md"
//             value={quantity}
//             onChange={handleQuantityChange}
//           />
//           <label htmlFor="shippingAddress" className="block mt-2 font-medium">
//             Shipping Address:
//           </label>
//           <textarea
//             id="shippingAddress"
//             className="mt-1 p-1 border rounded-md"
//             value={shippingAddress}
//             onChange={handleShippingAddressChange}
//           />
//           <label htmlFor="paymentMethod" className="block mt-2 font-medium">
//             Payment Method:
//           </label>
//           <select
//             id="paymentMethod"
//             className="mt-1 p-1 border rounded-md"
//             value={paymentMethod}
//             onChange={handlePaymentMethodChange}
//           >
//             <option value="credit-card">Credit Card</option>
//             <option value="paypal">PayPal</option>
//             <option value="stripe">Stripe</option>
//           </select>
//           <button
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
//             onClick={handleBuyNow}
//           >
//             Buy Now
//           </button>
//         </div>
//         {/* Add more product details here */}
//       </div>
//     </div>
//     </Layout>
//     </>

//   );
// };
// export default ProductDetails;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from "next/dynamic";
const Layout = dynamic(() => import('../Layout/layout'), {
  ssr: false
})
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false
})

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [reviewsData, setReviewsData] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/customer/getreviewbyproductid/${product.id}`);
        console.log('API Response:', response.data);

        if (response.data.length > 0 && response.data[0].ProductReview) {
          console.log('ProductReview:', response.data[0].ProductReview);
          setReviewsData(response.data[0].ProductReview);
        } else {
          setReviewsData([]);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setReviewsData([]);
      }
    };
    fetchReviews();
  }, [product.id]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleShippingAddressChange = (event) => {
    setShippingAddress(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const calculateTotalAmount = () => {
    return product.Price * quantity;
  };


  const handleBuyNow = () => {
    if (!quantity || !shippingAddress || !paymentMethod) {
      setError('Please fill in all the required fields.');
      return;
    }

    setError('');
    const confirmed = window.confirm('Are you sure you want to proceed with the purchase?');

    if (confirmed) {
      const totalAmount = calculateTotalAmount();
      const orderData = {
        products: product.id,
        customer: 57,
        quantity: quantity,
        shippingAddress: shippingAddress,
        paymentMethod: paymentMethod,
        orderStatus: 'Pending',
        orderDate: new Date().toISOString(),
        totalAmount: totalAmount,
      };

      axios.post('http://localhost:3000/customer/addorder', orderData)
        .then((response) => {
          console.log('Order response:', response.data);
        })
        .catch((error) => {
          console.error('Error placing order:', error);
        });
    }
  };
  console.log('reviewsData:', reviewsData);

  return (
    <>
        <Title page="ProductDetails"></Title>
      <Layout>
        <div className="flex p-4">
          <div className="w-1/2 p-4">
            <img
              src={`http://localhost:3000/customer/getproductimgbyid/${product.id}`}
              alt={product.Product_Name}
              className="max-w-full h-auto"
            />
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-xl font-bold">{product.Product_Name}</h2>
            <p className="mt-2">{product.Description}</p>
            <p className="mt-2">Price: {product.Price}</p>
            
         {/* Buy Now Form */}
        <div className="mt-4">
          <label htmlFor="quantity" className="block font-medium">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            className="mt-1 p-1 border rounded-md"
            value={quantity}
            onChange={handleQuantityChange}
          />
          <label htmlFor="shippingAddress" className="block mt-2 font-medium">
            Shipping Address:
          </label>
          <textarea
            id="shippingAddress"
            className="mt-1 p-1 border rounded-md"
            value={shippingAddress}
            onChange={handleShippingAddressChange}
          />
          <label htmlFor="paymentMethod" className="block mt-2 font-medium">
            Payment Method:
          </label>
          <select
            id="paymentMethod"
            className="mt-1 p-1 border rounded-md"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="stripe">Stripe</option>
            </select>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}

            </div>

            {/* Product Reviews */}
            <div className="mt-4">
  <h3 className="text-lg font-semibold">Product Reviews</h3>
  {console.log(reviewsData)}

  {reviewsData.length === 0 ? (
    <p>No reviews available for this product.</p>
  ) : (
    reviewsData.map((review, index) => (
      <div key={review.id} className="border p-4 mt-4">
        <p>{review.Review}</p>
        <p>Rating: {review.rating}</p>
        <p>Date: {review.Date}</p>
        {index < reviewsData.length - 1 && <hr />} {/* Add a line separator if it's not the last review */}
      </div>
    ))
  )}
</div>

          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetails;



// import React, { useState } from 'react';
// import { useCart } from './CartContext';
// import Layout from '../Layout/layout';

// const ProductDetails = ({ product }) => {
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);
//   const [shippingAddress, setShippingAddress] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('credit-card');

//   const handleQuantityChange = (event) => {
//     setQuantity(event.target.value);
//   };

//   const handleShippingAddressChange = (event) => {
//     setShippingAddress(event.target.value);
//   };

//   const handlePaymentMethodChange = (event) => {
//     setPaymentMethod(event.target.value);
//   };

//   const handleBuyNow = () => {
//     const purchaseDetails = {
//       product: product.Product_Name,
//       quantity: quantity,
//       shippingAddress: shippingAddress,
//       paymentMethod: paymentMethod
//     };

//     addToCart(purchaseDetails);
//   };

//   return (
//     <Layout>
//       <div className="flex p-4">
//         <div className="w-1/2 p-4">
//           <img
//             src={product.imageURL}
//             alt={product.Product_Name}
//             className="max-w-full h-auto"
//           />
//         </div>
//         <div className="w-1/2 p-4">
//           <h2 className="text-xl font-bold">{product.Product_Name}</h2>
//           <p className="mt-2">{product.Description}</p>
//           <p className="mt-2">Price: {product.Price}</p>
//           <div className="mt-4">
//             <label htmlFor="quantity" className="block font-medium">
//               Quantity:
//             </label>
//             <input
//               type="number"
//               id="quantity"
//               className="mt-1 p-1 border rounded-md"
//               value={quantity}
//               onChange={handleQuantityChange}
//             />
//             {/* Rest of the input fields */}
//             <button
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
//               onClick={handleBuyNow}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ProductDetails;
