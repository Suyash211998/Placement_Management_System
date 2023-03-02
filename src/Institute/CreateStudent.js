import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/createstudent.css"
import emailjs from '@emailjs/browser';
import SideNavBar from "./SideNavbar";

export default function CreateStudent() {
  let navigate = useNavigate();
  const form = useRef();
  const [user, setUser] = useState({
    companyName: "",
    companyId: "",
    city: "",
    email: "",
    phone: "",
    position: "",
    regDate: "",
    username: "",
    recruiterName: "",
    password:""
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
 
  const onSubmit = async (e) => {
    let usernameid =
      "recr" +
      user.companyId.substring(0, 3) +
      user.companyName.substring(0, 4) +
      user.phone.substring(0, 3);
    user.username = usernameid.split(" ").join("");
    let passwordid = user.companyName.substring(0, 4)+Math.floor((Math.random() * 1000) + 1)+"@"+user.phone.substring(0, 3);
    user.password = passwordid.split(" ").join("");
    
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/recruiter_user", user);
    
    if (res.status === 200) {
      console.log(user);
      console.log("success");
      emailjs.send("service_bbfw5tz", "template_vxo34en", {
        username:user.username,
        password:user.password,
        recruiterName:user.recruiterName,
        email:user.email
      }, "7x0P7whAnFJlF88Ts")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      openModal();
      setUser({
        companyName: "",
        companyId: "",
        city: "",
        email: "",
        phone: "",
        position: "",
        regDate: "",
        username: "",
        recruiterName: "",
        password:""
      });
    }
  };
  return (
    <div>
      <SideNavBar/>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Create Student Profile</span>
              
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Student Profile</h4>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Registration Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Registration Number"
                    
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                   
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="enter email id"
                   
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Degree</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="degree"
                    
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Graduation Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Graduation Date"
                    
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">University Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="university"
                    placeholder="University Name"
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
