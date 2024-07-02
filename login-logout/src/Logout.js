import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate();
    const handleLogout = (event)=>{
        event.preventDefault();
        navigate('/login')
    }
  return (
    <div>
      <nav className="navbar fixed-top navbar-light py-5" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <a className="navbar-brand fs-1" href="nav-bar">Navbar</a>
                    <form className="d-flex">
                        <button className="btn btn-primary fs-2" onClick={handleLogout} type="submit">Logout</button>
                    </form>
                </div>
            </nav>

            <div className="m-auto">
                <h1 className="contain">Private Views</h1>
            </div>


            <nav className="navbar fixed-bottom navbar-light py-5" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <a className="navbar-brand mx-auto fs-1" href="footer">Footer</a>
                </div>
            </nav>
    </div>
  )
}

export default Logout
