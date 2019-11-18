import React from "react";
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" style={{textDecoration:'none'}}>Login </NavLink>
      <NavLink to="/scanner" style={{textDecoration:'none'}}>Scanner </NavLink>
      <NavLink to="/generator" style={{textDecoration:'none'}}>Generator </NavLink>
    </div>
  );
};
export default Navigation;