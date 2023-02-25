import React from "react";
import "../Css/registerCss.css";

export default function RecuiterReg() {
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
                  <form className="form-horizontal">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="companyname"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Id</label>
                      <input
                        type="text"
                        className="form-control"
                        name="companyid"
                        placeholder="Company Id"
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Register Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="registerdate"
                        placeholder="Company Register Date"
                      />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
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
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="form-group">
                      <label>Position</label>
                      <input
                        type="text"
                        name="position"
                        className="form-control"
                        placeholder="Position"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Email ID</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone No.</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    
                    <div className="check-terms">
                      <input type="checkbox" className="checkbox" />
                      <span className="check-label">I agree to the terms</span>
                    </div>
                    <span className="signin-link">
                      Already have an account? Click here to <a href>Login</a>
                    </span>
                    <button className="btn signup">Create Account</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
