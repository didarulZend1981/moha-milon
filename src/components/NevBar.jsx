import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const NevBar = () => {
  const {user,logOut } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(() =>console.log('user looged out successfully'))
    .catch(error =>console.error(error))
  }
  const Navlink =<>
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/login">Login</NavLink></li>
       <li><NavLink to="/register">registration</NavLink></li>
     
       
  </>
  return (
    <div>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {Navlink}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Moha milon</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {Navlink}
    </ul>
  </div>
  <div className="navbar-end">
   
    {
      user ? <>
        <span>{user.email}</span>
        <a onClick={handleLogOut} className="btn btn-sm">
          Sign Out
        </a>
      </>
      :<Link to="/login">
      <button className="btn btn-sm">login</button>
      </Link>
    }
  </div>
</div>
    </div>
  );
};

export default NevBar;