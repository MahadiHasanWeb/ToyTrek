import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";



const Layout = () => {
    return (
        <div>
            <div className='my-container'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
                <ScrollRestoration></ScrollRestoration>
            </div>
        </div>
    );
};

export default Layout;