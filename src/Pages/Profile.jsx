import React, { useEffect, useState } from "react";
import { Table, Card, Image, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {MdDelete} from 'react-icons/md'
// import {FiEdit} from 'react-icons/fi'
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
const Profile = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const usersCollection = collection(db, "auth");

  useEffect(() => {
    const getusers = async () => {
      const data = await getDocs(usersCollection);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getusers();
  }, [usersCollection]);

  const deleteUser = (id) => {
    console.log(id);
    deleteDoc(doc(db, "auth", id));
    toast("Data Deleted!");
  };

  return (
    <>
      <div className="container">
        <div className="row profile-row">
          <div className="col-md-9">
            <Card style={{ margin: 24 }}>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <div className="align-items-center" style={{ marginRight: 8 }}>
                  <Image src="assets/RelymerLabs.png" width={150} />
                </div>
                <div><Link className="btn btn-primary" to="/home/:id">Back</Link></div>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  
                    {user.length ? (
                    user.map((usr, id) => {
                      return (
                        <>
                        <tbody key={id}>
                          <tr>
                            <td>{id + 1}</td>
                            <td>{usr.email}</td>
                            <td>{usr.password}</td>
                            <td>
                              <Link
                                style={{
                                  backgroundColor: "#008AD8",
                                  borderWidth: 0,
                                }}
                                className="btn text-white"
                                to={`/home/${usr.id}`}
                              >
                                Edit
                              </Link>
                              <Button
                              className="ms-2"
                                style={{
                                  backgroundColor: "#BD2B2B",
                                  borderWidth: 0,
                                }}
                                onClick={() => deleteUser(usr.id)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                          </tbody>
                        </>
                      );
                      
                    })
                ):<h3 className="text-center">Data Not Found</h3>
                }

                  
                </Table>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <p style={{ marginTop: 8, fontSize: 12, color: "#A1A1A1" }}>
                  © 2022 Relymer
                </p>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
