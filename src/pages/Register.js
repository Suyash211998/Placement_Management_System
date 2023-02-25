import React from 'react'
import "../Css/registerCss.css";

export default function Register() {
  return (
    <div>
      <div className="form-bg">
  <div className="container">
    <div className="row">
        <div className='col-2'></div>
      <div className="col-8">
        <div className="form-container">
          <h3 className="title">Institute Register</h3>
          <form className="form-horizontal">
            <div className="form-group">
              <label>Institute Name</label>
              <input type="text" className="form-control" name='clgname' placeholder="User Name" />
            </div>
            <div className="form-group">
              <label>Institute UID</label>
              <input type="text" className="form-control" name='clguid' placeholder="Institute UID" />
            </div>
            <div className="form-group">
              <label>Institute PAN Number</label>
              <input type="text" className="form-control" name='clgpan' placeholder="Institute PAN Number" />
            </div>
            <div className="form-group">
              <label>Institute Register Date</label>
              <input type="date" className="form-control" name='regdate' placeholder="Date" />
            </div>
            <h4 className="sub-title">Personal Information</h4>
            <div className="form-group">
              <label>Placement Officer Name</label>
              <input type="text" className="form-control" name='placementOfficer' placeholder="Placement Officer Name" />
            </div>
            <div className="form-group">
              <label>Phone No.</label>
              <input type="text" className="form-control" name='phone' placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name='email' placeholder="Email" />
            </div>
            
            <div className="check-terms">
              <input type="checkbox" className="checkbox" />
              <span className="check-label">I agree to the terms</span>
            </div>
            <span className="signin-link">Already have an account? Click here to <a href>Login</a></span>
            <button className="btn signup">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
