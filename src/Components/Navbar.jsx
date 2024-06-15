import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <a class='navbar-brand' href='#'>
              Mega Mart
            </a>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <Link to='/'>Products</Link>
              </li>
            </ul>
            <li class='nav-item '>
              <Link to='/cart'> {cart.length}</Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
