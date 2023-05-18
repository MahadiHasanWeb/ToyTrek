import { Link } from "react-router-dom";
import { FaGrav, FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthenticationPart/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then().catch()
    }
    console.log(user)

    const navItems = <>
        <li><Link className="btn btn-ghost" to="/">Home</Link> </li>
        <li><Link className="btn btn-ghost" to="/allToys">All Toys</Link> </li>
        <li><Link className="btn btn-ghost" to="/myToys">My Toys</Link> </li>
        <li><Link className="btn btn-ghost" to="/addToys">Add A Toy</Link> </li>
        <li> <Link className="btn btn-ghost" to="/blogs">Blogs</Link> </li>
    </>
    const navEnd = <>
        {user ? <img title={user.displayName} className='w-[52px] md:w-[60px] text-[#6F69AC] rounded-full h-[52px] md:h-[60px]' src={user.photoURL} alt="" /> : ''}
        {user ? <Link onClick={handleLogOut} to='/login' className="button button-primary bg-[#6F69AC] ms-4 md:ms-8">Log Out</Link>
            : <Link to='/login' className="button button-primary bg-[#6F69AC] ms-4 md:ms-8">Login</Link>
        }
    </>

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="flex normal-case">
                    <FaGrav className="mr-4 h-14 w-14 hidden md:flex text-[#6F69AC]" />
                    <span className="self-center  text-2xl md:text-3xl font-semibold whitespace-nowrap text-[#6F69AC]">ToyTrek</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {navEnd}
            </div>
        </div>
    );
};

export default Navbar;