import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../Layout/layout';
import { useAuth } from '../utils/authcontext';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const { login } = useAuth();


  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
  
    try {
    const response = await axios.post('http://localhost:3000/customer/signin', 
        {
          email: email,
          password: password,

        },
           {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            withCredentials: true
      });
      console.log("cookie: " + document.cookie);
      login(email, document.cookie);
      console.log("cookie: " + document.cookie);
      console.log("user:  " + email);
      setLoggedIn(true);
      setLoading(false);
      console.log('Login successful');
      router.push('/Component/UserDashbord'); 
    } catch (error) {
      console.error(error);
      console.log(error);
      setError('Invalid credentials. Please try again.');
      setLoading(false);
    }
  };
  
  if (loggedIn) {
    // Redirect to the dashboard page if the user is already logged in
    router.push('/Component/UserDashbord');
    
    return null; // No need to render anything in this case
  }

  return (
    <div className="">
      <Layout>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <form className="p-8 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
            <h2 className="mb-4 text-2xl font-semibold text-center">Login</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              disabled={loading} // Disable the button during loading
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            <p className="mt-4 text-sm text-center">
              Don't have an account?{' '}
              <Link href="/Component/SignUp" className="text-blue-500 underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default LoginForm;



















// import React, { useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import Layout from '../Layout/layout';
// import Link from 'next/link';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userType, setUserType] = useState('customer'); // Default to customer

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       let response;

//       if (userType === 'admin') {
//         const  response = await axios.post('http://localhost:3000/admin/signin', // Update the admin login API endpoint
//           {
//             email: email,
//             password: password,
//           },
//           {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           }
//         );
//         const userData = response.data; // Assuming the API returns a success response with user data and a token
//         localStorage.setItem('userData', JSON.stringify(userData)); // Store the user data in localStorage
//         setLoggedIn(true);
//         setLoading(false);
//         console.log('Login successful');
//         router.push('/Component/admin/adminDashbord'); // Redirect to the dashboard page

//       }
//        else {
//             response = await axios.post('http://localhost:3000/customer/signin', // Update the customer login API endpoint
//             {
//             email: email,
//             password: password,
//           },
//           {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           }
          
//         );
//       }
//       const userData = response.data; // Assuming the API returns a success response with user data and a token
//       localStorage.setItem('userData', JSON.stringify(userData)); // Store the user data in localStorage
//       setLoggedIn(true);
//       setLoading(false);
//       router.push('/Component/UserDashbord'); // Redirect to the dashboard page
//       console.log('Login successful');


     
//     } catch (error) {
//       console.error(error);
//       setError('Invalid credentials. Please try again.');
//       setLoading(false);
//     }
//   };

//   if (loggedIn) {
//     // Redirect to the appropriate dashboard page if the user is already logged in
//     if (localStorage.getItem('userData')) {
//       const userData = JSON.parse(localStorage.getItem('userData'));
//       if (userData.role === 'customer') {
//         router.push('/Component/UserDashbord');
//     } else if (userData.role === 'admin') {
//         router.push('/Component/admin/adminDashbord'); 
//     }
//     }

//     return null; // No need to render anything in this case
//   }

//   return (
//     <div className="">
//       <Layout>
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//           <form className="p-8 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
//             <h2 className="mb-4 text-2xl font-semibold text-center">Login</h2>
//             <div className="mb-4">
//               <label className="block mb-2 text-sm font-medium">User Type</label>
//               <div className="flex items-center">
//                 <label className="mr-4">
//                   <input
//                     type="radio"
//                     name="userType"
//                     value="customer"
//                     checked={userType === 'customer'}
//                     onChange={() => setUserType('customer')}
//                   />
//                   Customer
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="userType"
//                     value="admin"
//                     checked={userType === 'admin'}
//                     onChange={() => setUserType('admin')}
//                   />
//                   Admin
//                 </label>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block mb-2 text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>


//             <div className="mb-4">
//               <label htmlFor="password" className="block mb-2 text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
//               disabled={loading} // Disable the button during loading
//             >
//               {loading ? 'Logging in...' : 'Login'}
//             </button>

//             {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

//             <p className="mt-4 text-sm text-center">
//               Don't have an account?{' '}
//               <Link href="/Component/SignUp" className="text-blue-500 underline">
//                 Sign Up
//               </Link>
//             </p>
//           </form>
//         </div>
//       </Layout>
//     </div>
//   );
// };

// export default LoginForm;




