import Link from 'next/link';
import { returnPhnNum } from './ForgetProfileSearch';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../Layout/layout'), {
    ssr: false
  })
const Title = dynamic(() => import('../Layout/title'), {
    ssr: false
  })

export default function PasswordChangeFromForget() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [retypeNewPassword, setRetypePass] = useState('');
  const emailNo = returnPhnNum();

  const handleChangeNewPass = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeRepass = (e) => {
    setRetypePass(e.target.value);
    setErrorPass(''); // Clear error when input changes
  };

  function setvalue() {
    const DataofForm = {
      email: emailNo,
      newpassword: newPassword,
      confirmpassword: retypeNewPassword,
    };
    return DataofForm;
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const value = setvalue();
    if (newPassword === retypeNewPassword) {
      const response = await axios.post('http://localhost:3000/customer/Forgetpassword', value);
      console.log(response.data);
      router.push('/');
    } else {
      setErrorPass('Password Not Matched');
    }
  };

  return (
    <>
        <Title page="Forgetpassword"></Title>
    <Layout> 
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-md p-8 text-center">
        <h2 className="text-2xl font-semibold">Password Reset</h2>
        <div className="my-4">
          <input
            type="password"
            name="newPassword"
            onChange={handleChangeNewPass}
            placeholder="Enter New Password..."
            autoFocus
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="my-4">
          <input
            type="password"
            name="RetypenewPassword"
            onChange={handleChangeRepass}
            placeholder="Re-type Password..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errorPass && <span className="text-red-500 block mt-2">{errorPass}</span>}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Reset Password
        </button>
        <div className="mt-4">
          <Link href="/" className="text-blue-500 underline">
            Have an Account? Login..
          </Link>
        </div>
      </form>
    </div>
    </Layout>
    </>
  );
}
