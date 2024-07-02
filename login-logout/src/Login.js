import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const handleLogin = (event)=>{
        event.preventDefault();
        navigate('/logout');
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-light py-5" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <a className="navbar-brand fs-1" href="nav-bar">Navbar</a>
                    <form className="d-flex">
                        <Link to='/login' className="btn btn-primary fs-2" onClick={handleLogin} type="submit">Login</Link>
                    </form>
                </div>
            </nav>

            <div className="m-auto">
                <h1 className="contain">Public Views</h1>
            </div>


            <nav className="navbar fixed-bottom navbar-light py-5" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto fs-1" href="footer">Footer</a>
                </div>
            </nav>
        </div>
    )
}

export default Login
