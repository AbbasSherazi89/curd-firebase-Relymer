import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home-sec">
      <h1 className="pb-5">Welcome to the Home Page</h1>
      <Link to="/login" className="text-decoration-none">
        <Button variant="contained"> Sign In </Button>
      </Link>
      <br/>
      <Link to="/register" className="text-decoration-none">
        <Button variant="contained"> Sign Up </Button>
      </Link>
      <br/>
      <Link to="/users" className="text-decoration-none">
        <Button variant="contained"> Show Registered Users </Button>
      </Link>
    </section>
  );
};

export default Home;
