// import '@/styles/globals.css'




// import { AuthProvider } from './utils/authcontext';

// export default function App({ Component, pageProps }) {
//   return(    <AuthProvider>
//   <Component {...pageProps} />
//   </AuthProvider>);
// }


// pages/_app.js
import Head from 'next/head';
import { AuthProvider } from './utils/authcontext';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Include Flowbite CSS */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
        {/* Include Flowbite JavaScript */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;


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
