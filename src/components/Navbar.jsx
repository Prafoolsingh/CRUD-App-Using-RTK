import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar() {

    const allUsers = useSelector((state) => state.app.user);
    console.log(allUsers);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">RTK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link mx-lg-5 mx-md-0 mx-sm-0 mx-0" aria-current="page" to="/create">create user</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-lg-5 mx-md-0 mx-sm-0 mx-0" to="/read">Users({allUsers.length})</Link>
                        </li>


                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar