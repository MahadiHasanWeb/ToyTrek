import React from 'react';
import { NavLink } from 'react-router-dom';


const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive
                ? "font-bold btn btn-ghost underline text-[#6F69AC]" : "btn btn-ghost"
            }
        > {children}</NavLink>
    );
};

export default ActiveLink;