import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Css/createstudent.css"
import emailjs from '@emailjs/browser';
import SideNavBar from "./SideNavbar";
import { Button, Modal } from "react-bootstrap";

export default function InstituteProfile() {
  let navigate = useNavigate();
//   const { id } = useParams();
const id = 1;

  const form = useRef();
  const [user, setUser] = useState({
    clgName: "",
    clgPan: "",
    clgUid: "",
    email: "",
    phone: "",
    username: "",
    placementOfficer:"",
    regDate:""
  });
  const [isModalOpened, setIsModalOpened] = useState(false);
  
  const openModal = () => {
    setIsModalOpened(true);
  };
  const closeModal = () => {
    setIsModalOpened(false);
  };


  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  
useEffect(() => {
    loadProfile();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:8080/institute_user", user);
    console.log("Success");
    openModal();
  };

  const loadProfile = async () => {
    const result = await axios.get(`http://localhost:8080/institute_user/${id}`);
    setUser(result.data);
    
  };
 

  
  return (
    <div>
      <SideNavBar/>
      <div className="container rounded bg-white mt-5 mb-5">
        <form  onSubmit={(e) => onSubmit(e)}> 
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Institute Profile</span>
              
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Institute Profile</h4>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">College Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="College Name"
                    name="clgName"
                    value={user.clgName}
                    onChange={(e) => onInputChange(e)}
                    required
                    
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">College PAN</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="College PAN"
                    name="clgPan"
                    onChange={(e) => onInputChange(e)}
                    value={user.clgPan}
                    required
                    
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">College UID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="College UID"
                    name="clgUid"
                    onChange={(e) => onInputChange(e)}
                    value={user.clgUid}
                    required
                   
                  />
                </div>
                   <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="enter email id"
                    name="email"
                    onChange={(e) => onInputChange(e)}
                    value={user.email}
                    required
                   
                  />
                </div>
              </div>
                <div className="col-md-12">
                  <label className="labels">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="phone"
                    onChange={(e) => onInputChange(e)}
                    value={user.phone}
                    required
                    
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Placement Officer</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Placement Officer"
                    name="placementOfficer"
                    onChange={(e) => onInputChange(e)}
                    value={user.placementOfficer}
                    required
                    
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Placement Officer</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Placement Officer"
                    name="regDate"
                    onChange={(e) => onInputChange(e)}
                    value={user.regDate}
                    required
                    
                  />
                </div>
                 <div className="col-md-12">
                  <label className="labels">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter user name"
                    name="username"
                    onChange={(e) => onInputChange(e)}
                    value={user.username}
                    required
                   
                  />
                </div>
              </div>
                
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          </form>
          <Modal size="xxl" aria-labelledby="contained-modal-title-vcenter"
      centered show={isModalOpened} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Application form Sumbitted!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Now Go For The Email and Check Your Login Credentials</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
          
        </div>
      </div>
  )
};
