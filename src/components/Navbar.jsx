import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="col-12 d-flex flex-wrap justify-content-center" style={{ backgroundColor: 'rosybrown', opacity: '80%'}}>
            <NavLink to="/" className="btn btn-info text-light m-2" style={{ backgroundColor: 'sienna', fontFamily: 'Mohave' }}>Home</NavLink>
        </nav>
    );
};

export default Navbar;