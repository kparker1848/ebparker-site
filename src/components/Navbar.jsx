import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Navbar = () => {
    return (
        <nav className="col-12 d-flex flex-wrap justify-content-between bg-dustyrose">
            <div>
                <NavLink to="/" className="btn btn-info text-light m-2 bg-rust secondary-font">Home</NavLink>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/elliott-parker-56b23b139" target="_blank" rel="noreferrer" className="btn bg-rust text-light m-2"><BsLinkedin /> LinkedIn</a>
                <a href="https://github.com/kparker1848" target="_blank" rel="noreferrer" className="btn bg-rust text-light m-2"><BsGithub /> Github</a>
            </div>
        </nav>
    );
};

export default Navbar;