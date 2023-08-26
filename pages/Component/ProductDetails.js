import React, { useState } from 'react';
import Layout from '../Layout/layout';
import axios from 'axios';

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

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


  const handleBuyNow = async () => {
    const totalAmount = calculateTotalAmount(); // Calculate totalAmount
    const orderData = {
      products: product.id,
      customer: 57,
      quantity: quantity,
      shippingAddress: shippingAddress,
      paymentMethod: paymentMethod,
      orderStatus: 'pending',// Set orderStatus to 'pending' by default
      orderDate: new Date().toISOString(), // Convert date to ISO format
      totalAmount: totalAmount // Set totalAmount


    };

    try {
      const response = await axios.post('http://localhost:3000/customer/addorder', orderData); // Use Axios to make a POST request
      console.log('Order response:', response.data);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <>
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
        </div>
        {/* Add more product details here */}
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
