import React from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
const Forms = ({title, handleAction, setEmail, setPassword}) => {
  return (
    <>
      <section className="Forms-sec">
        <div className="container">
          <div className="row forms-top-row py-4">
           <div className="col-md-8">
            <div className="row forms-second-row py-4">
                <h1 className="text-center">{title} Form</h1>
            <div className="col-md-5 form-col1"> 
                <img className="img-fluid" src="assets/signup.webp" alt="" />
            </div>
            <div className="col-md-5 form-col2">
              <TextField
                id="email"
                type="email"
                label="Email"
                variant="outlined"
                onChange={(e)=>setEmail(e.target.value)}
                
              />
              <br/>
              <TextField
                id="password"
                type="password"
                label="Password"
                variant="outlined"
                onChange={(e)=>setPassword(e.target.value)}
              /><br/>
              <Button variant="contained" onClick={handleAction}>{title}</Button>
              <p className="text-start">
                    <Link className="text-decoration-none" to="/forgot">
                      Forgot Password?
                    </Link>
                  </p>
              <br/>
            </div>
            </div>
           </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forms;
