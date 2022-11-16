import {React, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const LoginHome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem("auth");
        if (authToken) {
          navigate("/home");
        }
        if (!authToken) {
          navigate("/login");
        }
      }, [navigate]);

    const logout=()=>{
        sessionStorage.removeItem('auth');
        navigate('/login')
    }
  return (
    <>
      <section className="home-sec">
        <h1>Logged in to the Home</h1>
    <br/>
        <Button variant="text" onClick={logout}>Logout</Button>
      </section>
    </>
  );
};

export default LoginHome;
