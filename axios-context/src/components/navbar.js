import React from "react";
import {
    Link
} from "react-router-dom";


function Nav() {
    return (
        <nav>
            <ul>
               
               <li>
                    <Link to="/">Signup</Link>
                </li>
                <li>
                    <Link to="/signin">Signin</Link>
                </li>
                <li>
                    <Link to="/addstudents">Add Student</Link>
                </li>
                <li>
                    <Link to="/allstudents">All Student</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
