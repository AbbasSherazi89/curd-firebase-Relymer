import { React, useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { db } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {MdDelete} from 'react-icons/md'
// import {FiEdit} from 'react-icons/fi'
import {
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
const LoginHome = ({ title, setEmail, setPassword }) => {
  const navigate = useNavigate();
  const [newemail, setNewEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  
  
  const { id } = useParams();
  // useEffect(() => {
  //   let authToken = sessionStorage.getItem("auth");
  //   if (authToken) {
  //     navigate("/home");
  //   }
  //   // if (!authToken) {
  //   //   navigate("/login");
  //   // }
  // }, [navigate]);

  const handleUpdate=(e)=> {
    e.preventDefault();
    e.preventDefault();
    const docRef = doc(db, "auth", id);
    const data = {
      email: newemail,
      password: newpassword,
    };
    setDoc(docRef , data ,{ merge: true } ).then(() =>{
      toast('Data Updated SuccessFully')
    },setNewEmail(''),setNewPassword('')) 
  }

  const viewData = () => {
    navigate("/profile");
  };

  const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <>
      <section className="Forms-sec">
        <div className="container">
          <div className="row forms-top-row py-4">
            <div className="col-md-8">
              <div className="row forms-second-row py-4">
                <div>
                  <Button variant="contained" onClick={viewData}>
                    View Data
                  </Button>
                  <Button variant="contained" className="ms-3" onClick={logout}>
                    Logout
                  </Button>
                </div>
                <h1 className="text-center">{title} Data</h1>
                <div className="col-md-5 form-col1">
                  <img className="img-fluid" src="assets/signup.webp" alt="" />
                </div>
                <div className="col-md-5 form-col2">
                  <TextField
                    id="email"
                    type="email"
                    label="Email"
                    variant="outlined"
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                  <br />
                  <TextField
                    id="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <br />
                  <Button variant="contained" onClick={handleUpdate}>
                    {title}
                  </Button>
                  <p className="text-start">
                    <Link className="text-decoration-none" to="/forgot">
                      Forgot Password?
                    </Link>
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginHome;
