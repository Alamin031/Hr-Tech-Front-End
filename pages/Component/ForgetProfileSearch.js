import Link from "next/link";
// import dynamic from "next/dynamic";
import { OTPsendEnvent } from "./OtpEnterForgetPass";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

// const PageTitle = dynamic(()=>import('../PageTitle/title'),
// {
//   ssr : false,
// })

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
        {/* <PageTitle PageName = "Search Profile"></PageTitle> */}
        <div style={{ color: 'Black', margin: '0 auto' , textAlign: 'center', padding: '20px'}}>
            <form onSubmit={handleFormSubmit} style={{ textAlign: 'center', padding: '20px', border: 'none', borderRadius: '8px' }}>
            {/* <HeaderForPage></HeaderForPage> */}
            <h2>Profile Search</h2>
            <div>
                <input type="text" name="searchValue" onChange={handleChangeSearchValue} placeholder="Enter email/Phone..."/>
                <br />
                <span>{errorEmailPhn && <b>{errorEmailPhn}</b>}</span>
            </div>
            <br></br>
            <button type="submit">Search</button>
            <div className="BackToLogin">
                <Link style={{textDecoration: 'none'}} href="/">Have an Account? Login..</Link>
                {/* <FooterForPage></FooterForPage> */}
            </div>
            </form>
        </div>
        </>
    )
}