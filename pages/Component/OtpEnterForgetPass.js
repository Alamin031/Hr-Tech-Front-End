import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { returnOTP } from './ForgetProfileSearch';
import dynamic from "next/dynamic";
const Layout = dynamic(() => import('../Layout/layout'), {
    ssr: false
  })
const Title = dynamic(() => import('../Layout/title'), {
    ssr: false
  })

export default function ForgetPassOTP() {
  const router = useRouter();
  const [OTPvalue, setOTPValue] = useState('');
  const [errorOTP, setErrorOTP] = useState('');

  const handleChangeOTPValue = (e) => {
    setOTPValue(e.target.value);
    setErrorOTP(''); // Clear error when input changes
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const otp = returnOTP();
    if (otp === parseInt(OTPvalue)) {
      router.push('./PasswordChange');
    } else {
      setErrorOTP('OTP match failed');
    }
  };

  return (
    <>
    <Title page="OTP"></Title>

    <Layout>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-md p-8 text-center">
        <h2 className="text-2xl font-semibold">Enter OTP</h2>
        <input
          type="password"
          onChange={handleChangeOTPValue}
          name="OTPvalue"
          autoFocus
          className="w-full px-3 py-2 border rounded-md focus:outline-none"
        />
        {errorOTP && <span className="text-red-500 block mt-2">{errorOTP}</span>}
        <button
          type="submit"
          style={{ backgroundColor: 'green', color: 'white' }}
          className="mt-4 px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
        >
          <b>Verify</b>
        </button>
        <div className="mt-4">
        <Link href="/Component/LoginForm" className="text-blue-500 underline">
            Have an Account? Login..
          </Link>
        </div>
      </form>
    </div>
    </Layout>
    </>
  );
}
