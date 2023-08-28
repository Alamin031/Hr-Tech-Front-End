// import SideNavbar from "./SideNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { useAuth } from '../utils/authcontext';
import Cookies from "js-cookie"; // Import the Cookies library
import SearchResultsModal from '../Layout/SearchResultsModal';


const CustomerNavbar = () => {
  const [jsonData, setJsonData] = useState(null);
  const router = useRouter();
  const { user, logout, checkUser } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
    
  //   console.log("CheckUser::::"+checkUser())
  //   if (!checkUser()) {
  //     router.push('/');
  //   }
  //   else {fetchData();}
  // }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:3000/customer/showprofile/${user.email}`);
      const jsonData = response.data;
      console.log(jsonData)
      setJsonData(jsonData);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    const handleSearch = async () => {
      try {
        console.log('Searching for:', searchQuery);
        const response = await axios.get(`http://localhost:3000/customer/search/${searchQuery}`);
        console.log('Search results:', response.data);
        setSearchResults(response.data);
        setIsModalOpen(true); // Open the modal with search results
      } catch (error) {
        console.error('Error fetching search results:', error);
        setSearchResults([]);
      }
    };

    if (searchQuery.trim() !== '') {
      handleSearch();
    }
  }, [searchQuery]);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  const handleLogout = () => {
    logout();
    router.push('./LoginForm')
  };

  return (
    <>
    {jsonData &&
      <div className="navbar bg-slate-200">
          <div className="flex-1">
        {/* <a href="./UserDashbord"className="btn btn-ghost normal-case text-xl">Hr Tech</a> */}
        <button onClick={() => router.push('./UserDashbord')} className="btn btn-ghost normal-case text-xl">Hr Tech</button>       

        
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
            <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-2 py-1 border border-gray-400 rounded"
        />
        </div>
    
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
             </div>
           </div>       
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={'http://localhost:3000/customer/getimage/' + jsonData.profilePic} />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
                <li>
                  <a className="justify-between">
                  <span className="badge">Hello</span>

                  {jsonData.firstName} {jsonData.lastName}
                  </a>
                </li>
                <li><button onClick={() => router.push('./profile')} className="btn btn-ghost">Profile</button></li>       
               <li> <button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          </div>
          <SearchResultsModal
        isOpen={isModalOpen}
        searchResults={searchResults}
        onClose={closeModal}
      >
        {searchResults.length === 0 && (
          <p className="text-red-500">No products found for the search query.</p>
        )}
      </SearchResultsModal>
        </div>
    }
    {/* <SideNavbar/> */}
    
    </>
      );
    }
export default CustomerNavbar;