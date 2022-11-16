import React from "react";
import { TextField, Button } from "@mui/material";
// import { Link } from "react-router-dom";


const Forgot = ({ title, setEmail, handleSubmit}) => {


  return (
    <>
      <section className="Forms-sec">
        <div className="container">
          <div className="row forms-top-row py-4">
           <div className="col-md-8">
            <div className="row forms-second-row py-4">
                <h1 className="text-center">Forgot Password</h1>
            <div className="col-md-5 form-col1"> 
                <img className="img-fluid" src="assets/forgot-pass.png" alt="" />
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
            
              <Button variant="contained" onClick={handleSubmit}>{title}</Button>
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

export default Forgot;
