
import Link from "next/link";
// import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/router";
import { returnOTP } from "./ForgetProfileSearch";
// import PasswordChangeFromForget from "./PasswordChange";

// const PageTitle = dynamic(()=>import('../PageTitle/title'),
// {
//   ssr : false,
// })

export default function ForgetPassOTP()
{

    const router = useRouter();
    const [OTPvalue, setOTPValue] = useState('');
    const [errorOTP, setErrorOTP] =useState('');
    
    const handleChangeOTPValue = (e) => 
    {
        setOTPValue(e.target.value);
    };

    const handleFormSubmit = async (e) =>
    {
        e.preventDefault();
        const otp = returnOTP();
        if (otp === parseInt(OTPvalue))
        {
            router.push('./PasswordChange');
        }
        else
        {
            setErrorOTP("OTP match failed");
        }
    };
    
    return (
        <>
        <div style={{ color: 'Black', margin: '0 auto' , textAlign: 'center', padding: '20px'}}>
            <form onSubmit={handleFormSubmit}>
                <h2>Enter OTP</h2>
                <input type="password" onChange={handleChangeOTPValue} name="OTPvalue" autoFocus/>
                <br />
                <span>{errorOTP && <b>{errorOTP}</b>}</span>
                <br/>
                <button type="submit" style={{backgroundColor : 'green', color: 'white'}}><b>Verify</b></button>
                <br />
                <div className="BackToLogin">
                    <Link style={{textDecoration: 'none'}} href="/">Have an Account? Login..</Link>
                </div> 
            </form>
        </div>
        </>
    )
}