import React from "react";
import { Link, Outlet } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Landingpage</h1>
      <Link to="/signIn">SignIn</Link>
      <Link to="/signUp">SignUp</Link>
      <Link to="/home">home</Link>
      <Outlet />
    </div>
  );
};

export default Landing;
