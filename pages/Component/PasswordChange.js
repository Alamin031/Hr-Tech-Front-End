
import Link from "next/link";
import dynamic from "next/dynamic";
import { returnPhnNum } from "./ForgetProfileSearch";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

export default function PasswordChangeFromForget()
{
    const router = useRouter();
    const [newPassword, setNewPassword] = useState('');
    const [errorPass, setErrorPass] =useState('');
    const [RetypenewPassword, setRetypePass] = useState('');
    const emailNo = returnPhnNum();

    const handleChangeNewPass = (e) => 
    {
        setNewPassword(e.target.value);
    };

    const handleChangeRepass = (e) => 
    {
        setRetypePass(e.target.value);
    };

    function setvalue()
    {
        const DataofForm ={
        'email': emailNo,
        'newpassword': newPassword,
        'confirmpassword': RetypenewPassword };
        return DataofForm;
    }

    const handleFormSubmit = async (e) =>
    {
        e.preventDefault();
        const value = setvalue();
        console.log(value);
        if (newPassword === RetypenewPassword)
        {
            console.log(emailNo);
            // PassowordChangedEvent();
            const response = await axios.post('http://localhost:3000/customer/Forgetpassword',value); 
            console.log(response.data);
            router.push('/');
        }
        else
        {
            setErrorPass("Password Not Matched");
        }
    };

    return (
        <>
        <div style={{ color: 'Black', margin: '0 auto' , textAlign: 'center', padding: '20px'}}>
            <form onSubmit={handleFormSubmit}>
                <h2>Password Reset</h2>
                <div>
                    <input type="password" name="newPassword" onChange={handleChangeNewPass} placeholder="Enter New Password..." autoFocus />
                </div>
                <br />
                <div>
                    <input type="password" name="RetypenewPassword" onChange={handleChangeRepass} placeholder="Re-type Passoword..." />
                    <br />
                    <span>{errorPass && <b>{errorPass}</b>}</span>
                </div>
                <br />
                <button type="submit">Reset Password</button>
                <div className="BackToLogin">
                    <Link style={{textDecoration: 'none'}} href="/">Have an Account? Login..</Link>
                </div> 
            </form>
        </div>
        </>
    )
}