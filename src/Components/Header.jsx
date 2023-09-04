import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {

    const {user,logOut}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            <Link className="btn btn-ghost normal-case text-xl" to="/orders">orders</Link>
           {
                user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>
            }
            <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
            {
                user ?<>
                <span>{user.email}</span>
                <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                </>:<Link to="/login"></Link>
                        
                }
            </div>
        </div>
    );
};

export default Header;