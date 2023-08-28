import React from 'react';
import Head from 'next/head';
import AdminNavbar from '../../Layout/AdminNavbar';
// import Dashboard from '../../components/Dashboard'; // Replace with the correct path
import Dashboard from '../../Component/admin/Dashboard';
export default function adminDashbord() {
  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </Head>

      <AdminNavbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Welcome to Admin Dashboard</h1>
          <Dashboard /> {/* Add the Dashboard component here */}
        </main>
      </div>
    </div>
  );
}
