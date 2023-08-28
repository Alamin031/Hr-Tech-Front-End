import SideNavbar from "./SideNavbar"
import CustomerNavbar from "./customerNavbar"
import ProductForm from "./ProductList"
import Footer from "../Layout/Footer"
import CardComponent from "./test"
import dynamic from 'next/dynamic'


const Title = dynamic(() => import('../Layout/title'), {
  ssr: false
})


export default function Dashboard() {
    return (
      <>
    <Title page="Dashbord"></Title>


      <div>
        <CustomerNavbar/>
        <SideNavbar/>
        <CardComponent/>
        <Footer/>

      </div>
     
      </>
    )
  }




// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const Dashboard = () => {
//   const [loading, setLoading] = useState(true);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const router = useRouter();
//   useEffect(() => {
//     setLoading(true);
//     const userData = JSON.parse(localStorage.getItem('userData'));
//     if (userData && userData.email) {
//       setLoggedIn(true);
//     } else {
//       router.push('/Component/LoginForm');
//     }

//     setLoading(false);
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!loggedIn) {
//     router.push('/Component/LoginForm');
//     return null; 
//   }

//   return (
//     <>
//       {/* Your dashboard content */}
//       <p>Welcome to Dashboard!</p>
//     </>
//   );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const Dashboard = () => {
//   const [loading, setLoading] = useState(true);
//   const [userData, setUserData] = useState(null);

//   const router = useRouter();

//   useEffect(() => {
//     setLoading(true);
//     const storedUserData = JSON.parse(localStorage.getItem('userData'));
//     setUserData(storedUserData);
//     setLoading(false);
//   }, []);

//   useEffect(() => {
//     if (!userData) {
//       console.log(useEffect)
//       router.push('/Component/LoginForm');
//     }
//   }, [userData, router]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!userData) {
//    router.push('/Component/LoginForm');
//     return null;
//   }

//   return (
//     <>
//       {/* Your dashboard content */}
//       <p>Welcome to Dashboard, {userData.name}!</p>
//       <p>Email: {userData.email}</p>
//       <img src={userData.profilePic} alt="Profile Picture" />
//     </>
//   );
// };

// export default Dashboard;
