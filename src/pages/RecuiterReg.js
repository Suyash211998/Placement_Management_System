import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Css/registerCss.css";
import emailjs from '@emailjs/browser';

export default function RecuiterReg() {
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
      <div>
        <div className="form-bg">
          <div className="container">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="form-container">
                  <h3 className="title">Recruiter Register</h3>

                  <form className="form-horizontal" ref={form} onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                    <input type="hidden" name="username" onChange={(e) => onInputChange(e)} value={user.username}/>
                  <input type="hidden" name="password" onChange={(e) => onInputChange(e)} value={user.password}/>
                      <label>Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="companyName"
                        onChange={(e) => onInputChange(e)}
                        value={user.companyName}
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Id</label>
                      <input
                        type="text"
                        className="form-control"
                        name="companyId"
                        value={user.companyId}
                        onChange={(e) => onInputChange(e)}
                        placeholder="Company Id"
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Register Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="regDate"
                        value={user.regDate}
                        onChange={(e) => onInputChange(e)}
                        placeholder="Company Register Date"
                      />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={user.city}
                        onChange={(e) => onInputChange(e)}
                        placeholder="City"
                      />
                    </div>

                    <h4 className="sub-title">Personal Information</h4>
                    <div className="form-group">
                      <label>Recruiter Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="recruiterName"
                        value={user.recruiterName}
                        onChange={(e) => onInputChange(e)}
                        placeholder="Recruiter Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Position</label>
                      <input
                        type="text"
                        name="position"
                        value={user.position}
                        className="form-control"
                        onChange={(e) => onInputChange(e)}
                        placeholder="Position"
                      />
                    </div>

                    <div className="form-group">
                      <label>Email ID</label>
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        className="form-control"
                        onChange={(e) => onInputChange(e)}
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone No.</label>
                      <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        className="form-control"
                        onChange={(e) => onInputChange(e)}
                        placeholder="Phone Number"
                      />
                    </div>

                    <div className="check-terms">
                      <input type="checkbox" className="checkbox" />
                      <span className="check-label">I agree to the terms</span>
                    </div>
                    <span className="signin-link">
                      Already have an account? Click here to
                      <Link to={"/"}>Login</Link>
                    </span>
                    <button className="btn signup">Create Account</button>
                  </form>
                </div>
              </div>
              <Modal
                size="lg"
                dialogClassName="modal-90w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={isModalOpened}
                onHide={closeModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Application form Sumbitted!!!
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Now Go To Email and check Your UserName and Password </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={closeModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
