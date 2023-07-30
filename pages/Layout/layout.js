import Header from './header'
import Navbar from './Navbar'
import Footer from './Footer'
import Title from './title'
import SideNavbar from '../Component/SideNavbar'

export default function Layout({children}) {
    return (
        <>
   {/* <Title></Title>          */}
<Header></Header>      
<Navbar></Navbar> 
{/* <SideNavbar></SideNavbar>    */}

   {children}
       <Footer></Footer>
        </>
    )
    }