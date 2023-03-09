import React from 'react'
import { Link, useParams } from 'react-router-dom';
import "../Css/insitutehome.css"
import SideNavbar from './SideNavbar'

export default function StudentHome() {
    const { clgName } = useParams();
  return (
    <div>
      <div>
        <SideNavbar/>
  {/* Page Header Start */}
  <div className="container-fluid page-header mt-3 py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">{clgName}</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
        <p className="fs-5 fw-medium text-primary">Welcome To Our Recruit</p>
        <h1 className="display-5 mb-5">Services that We Offer</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item position-relative h-100">
            <div className="service-text rounded p-5">
              <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                <img className="img-fluid" src="images/img/icon/icon-2.png" alt="Icon" />
              </div>
              <h5 className="mb-3">Create Resume </h5>
              <p className="mb-0">A format to create students resume for the placements</p>
            </div>
            <div className="service-btn rounded-0 rounded-bottom">
              <Link className="text-primary fw-medium" to={"/createresume/Personaldetail"} >Click here<i className="bi bi-chevron-double-right ms-2" /></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item position-relative h-100">
            <div className="service-text rounded p-5">
              <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                <img className="img-fluid" src="images/img/icon/icon-4.png" alt="Icon" />
              </div>
              <h5 className="mb-3">View Jobs</h5>
              <p className="mb-0">You will see applicable jobs and their detailed information</p>
            </div>
            <div className="service-btn rounded-0 rounded-bottom">
            <Link className="text-primary fw-medium" to={"/institutehome/jobdisplay"} >Click here<i className="bi bi-chevron-double-right ms-2" /></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item position-relative h-100">
            <div className="service-text rounded p-5">
              <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                <img className="img-fluid" src="images/office.png" alt="Icon" />
              </div>
              <h5 className="mb-3">Applied Companies</h5>
              <p className="mb-0">View all Applied Companies available for the upcoming campus placements</p>
            </div>
            <div className="service-btn rounded-0 rounded-bottom">
                <Link className="text-primary fw-medium" to={"/institutehome/interestedcompanies"} >Click here<i className="bi bi-chevron-double-right ms-2" /></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item position-relative h-100">
            <div className="service-text rounded p-5">
              <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{width: '64px', height: '64px'}}>
                <img className="img-fluid" src="images/mortarboard.png" alt="Icon" />
              </div>
              <h5 className="mb-3">View Student Profile</h5>
              <p className="mb-0">View and Manage Student Profile Details and their campus placements status </p>
            </div>
            <div className="service-btn rounded-0 rounded-bottom">
            <Link className="text-primary fw-medium" to={"/"} >Click here<i className="bi bi-chevron-double-right ms-2" /></Link>
            </div>
          </div>
        </div>
       
     
      </div>
    </div>
  </div>
  {/* Service End */}
</div>

    </div>
  )
}
