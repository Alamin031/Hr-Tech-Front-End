import Link from "next/link";
import dynamic from "next/dynamic";
import { OTPsendEnvent } from "./OtpEnterForgetPass";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
const Layout = dynamic(() => import('../Layout/layout'), {
    ssr: false
  })
const Title = dynamic(() => import('../Layout/title'), {
    ssr: false
  })
let OTP ;
let phoneNumber;
export function returnOTP()
{
  return OTP;
}
export function returnPhnNum()
{
  return phoneNumber;
}
export function setOTP (otpcode, phonenumber)
{
    phoneNumber = phonenumber;  
    console.log(phoneNumber);     
    OTP = otpcode;
    console.log(OTP);
    return OTP;
}

export default function ForgetPassProfileSearchPage()
{

    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const [errorEmailPhn, setErrorEmailPhn] =useState('');
    
    const handleChangeSearchValue = (e) => 
    {
        setSearchValue(e.target.value);
    };

    const handleFormSubmit = async (e) =>
    {
        e.preventDefault();
        await ForStudentApplication(searchValue);
    };

    async function ForStudentApplication(DataofForm)
    {
        try
        {
            const response = await axios.get('http://localhost:3000/admin/customersearch/'+DataofForm); 
            console.log(response.data);
            if(response.data.id == 0)
            {
                setErrorEmailPhn(response.data.error);
            }
            else
            {
                //OTPsendEnvent();
                const OTPvalue = await axios.post('http://localhost:3000/customer/OTPsend/'+searchValue)
                console.log(OTPvalue.data);
                console.log(OTPvalue.data.otpCode);
                setOTP(OTPvalue.data.otpCode,response.data.email);
                router.push('./OtpEnterForgetPass');
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }

  return (
    <>
        <Title page="Forgetpassword" ></Title>
        <Layout> 
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-md p-8 text-center">
        <h2 className="text-2xl font-semibold">Profile Search</h2>
        <div className="my-4">
          <input
            type="text"
            name="searchValue"
            onChange={handleChangeSearchValue}
            placeholder="Enter email/Phone..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
          {errorEmailPhn && <span className="text-red-500">{errorEmailPhn}</span>}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Search
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


