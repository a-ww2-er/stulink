import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section style={{display:"flex", justifyContent:"space-evenly",backgroundColor:"grey", textDecoration:"underline"}}>
        <Link to="/login">Login</Link>
        <Link to="/dashboard/projects">dashboard</Link>
        <Link to="/register">register</Link>
      </section>
      <div>HomePage
      </div>
      <span>
        working email for login: danny20@gmail.com<br />
       <span> password: good</span>
      </span>
    </>
  );
};

export default HomePage;
