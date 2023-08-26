import '@/styles/globals.css'




import { AuthProvider } from './utils/authcontext';

export default function App({ Component, pageProps }) {
  return(    <AuthProvider>
  <Component {...pageProps} />
  </AuthProvider>);
}

// import { CartProvider } from './Component/CartContext';

// export default function App({ Component, pageProps }) {
//   return (<CartProvider> <Component {...pageProps} /> </CartProvider>);
// }



// import { CartContext } from './Component/CartContext'; // Adjust the path

// function App({ Component, pageProps }) {
//   return (
//     <CartContext>
//       <Component {...pageProps} />
//     </CartContext>
//   );
// }

// export default App;
