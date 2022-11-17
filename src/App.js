import "./App.scss";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, addDoc} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//////Components/////////////
import { db } from "./firebase";
import Home from "./Pages/Home";
import Base from "./Components/Layout/Base";
import Forms from "./Components/Elements/Forms";
import LoginHome from "./Pages/LoginHome";
import Forgot from "./Components/Elements/Forgot";
import RegisteredUsers from "./Components/Elements/RegisteredUsers";
import TablesData from "./Components/Elements/TablesData";
function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 

  const handleSubmit = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Email Sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAction = (id) => {
    console.log(id);
    const authentication = getAuth();
    if (id === 2) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate("/home");
          sessionStorage.setItem("auth", res._tokenResponse.RefreshToken);
        })
        .catch((e) => {
          if (e.code === "auth/wrong-password") {
            toast.error("Check the password");
          }
          if (e.code === "auth/user-not-found") {
            toast.error("Check the email");
          }
        });
    }
    if (id === 1) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate("/login");
          toast.info("created Successfully");
          sessionStorage.setItem("auth", res._tokenResponse.RefreshToken);
          addDoc(collection(db, "auth"), {
            email: email,
            password: password,
          });
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };
  return (
    <>
     
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/home" element={<LoginHome />} />
          <Route index path="/table" element={<TablesData />} />
          <Route index path="/users" element={<RegisteredUsers />} />
          <Route
            index
            path="/register"
            element={
              <Forms
                handleAction={() => handleAction(1)}
                setEmail={setEmail}
                setPassword={setPassword}
                title="Register"
              />
            }
          />
          <Route
            index
            path="/login"
            element={
              <Forms
                handleAction={() => handleAction(2)}
                setEmail={setEmail}
                setPassword={setPassword}
                title="Login"
              />
            }
          />
          <Route
            path="/forgot"
            element={
              <Forgot
                setEmail={setEmail}
                handleSubmit={handleSubmit}
                title="Submit"
              />
            }
          />
        </Routes>
      </Base>
      <ToastContainer />
    </>
  );
}

export default App;
