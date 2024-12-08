import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import productContext from '../context/productContext'

const Navbar = (props) => {
  const context = useContext(productContext)
  const { state: { cart}} = context


  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/editmodal">modal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/user">User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link position-relative" to="./cartitem"><FaShoppingCart />
                    <span class="position-absolute top-5 start-100 translate-middle badge  bg-danger">
                      {cart.length}
                      <span class="visually-hidden">unread messages</span>
                    </span>
                 
                </Link>

              </li>

            </ul>
            <button className='btn btn-success' onClick={props.toggleMode}>{props.text}</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

