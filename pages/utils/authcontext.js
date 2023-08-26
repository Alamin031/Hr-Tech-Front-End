import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);



  const login = (email, cookie) => {
     sessionStorage.setItem('email', email); 
      setUser({ email, cookie });
  
    };
  
  const checkUser = () => {
    console.log("user:  "+user.email)
    console.log("user:  "+user.cookie)
    if(user.email!=null && user.cookie!=null) {
      return true;
    }
    else
    {
      return false;
    }

  };

  const logout = () => {

    doSignOut()
  };
  async function doSignOut() {
    try {
      const response = await axios.post('http://localhost:3000/customer/signout',
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          withCredentials: true
        }
      );
      console.log("cookie available?"+document.cookie)
      console.log(response)
        setUser(null);
        // document.cookie = null;
        const cookies = Cookies.get();
        for (const cookieName in cookies) {
          Cookies.remove(cookieName);
        }
        console.log("cookie distory?"+document.cookie)
        router.push('../Component/LoginForm');
    } catch (error) {
      console.error('error failed: ', error);
    }
  }
  // async function doSignOut() {
  //   try {
  //     const response = await axios.post('http://localhost:3000/customer/signout',{
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //       withCredentials: true,
  //     });
  //     console.log(response);
  //     setUser(null);
  //     document.cookie = null;
  //       return { success: true };
  //   } catch (error) {
  //     console.error('error failed: ', error);
  //     return { success: false, error };
  //   }
  // }
  return (
    <AuthContext.Provider value={{ user, login, logout,checkUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);



