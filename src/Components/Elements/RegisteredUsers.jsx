import React from "react";
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Button, TextField } from "@mui/material";

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);
  const usersCollection = collection(db, "auth");

  const [newemail, setNewemail] = useState("");
  const [newpassword, setNewpassword] = useState("");

  ////Show the Registered Users////
  useEffect(() => {
    const getusers = async () => {
      const data = await getDocs(usersCollection);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getusers();
  }, []);

  /////Add new User
  const createUser= async()=>{
    await addDoc(usersCollection,{email:newemail, password:newpassword})
  }

  return (
    <>
      <section className="register-user-sec">
     
     <div className="container">
        <div className="row row-register">
            <div className="col-md-7">
            <div className="pb-4">
          <TextField
            id="email"
            type="email"
            label="Email"
            variant="outlined"
            onChange={(e) => setNewemail(e.target.value)}
          />
          <TextField
          className="ms-2"
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            onChange={(e) => setNewpassword(e.target.value)}
          />
          <Button className="ms-2 py-3" variant="contained" onClick={createUser}>Add User</Button>
        </div>
        {users.map((user) => {
          return (
            <>
              <h5>Email: <span className="fw-italic">{user.email}</span> </h5>
              <h5>Password: <span className="fw-italic">{user.password}</span></h5>
              <hr />
            </>
          );
        })}
            </div>
        </div>
     </div>
       

        
      </section>
    </>
  );
};

export default RegisteredUsers;
