import React from 'react'
import SideNavBar from './SideNavbar'

export default function JobDisplay() {
  return (
    <div>
        <div>
  <SideNavBar/>
  <div className="bg-body mt-5 container"><h3>Posted jobs</h3></div>
</div>

<div className="container mt-5 px-2">
  <div className="mb-2 d-flex justify-content-between align-items-center">
    <div className="position-relative mb-3">
      <span className="position-absolute search"><i className="fa fa-search" /></span>
      <input className="form-control w-100" placeholder="Search by order#, name..." />
    </div>
  </div>
  <div className="table-responsive">
    <table className="table table-responsive table-borderless">
      <thead>
        <tr className="bg-light">
          <th scope="col" width="2%">Sr</th>
          <th scope="col" width="15%">Job Title</th>
          <th scope="col" width="15%">Company Name</th>
          <th scope="col" width="25%">Job Description</th>
          <th scope="col" width="25%">Requirements</th>
          <th scope="col" width="10%">View</th>
          <th scope="col" className="text-end" width="10%"><span>Interested</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Java Backend Developer</td>
          <td>Althan Travis LTD</td>
          <td><span className="ms-1">Delivering next-generation features in small, high-performing teams Collaborating with other developers to write the best code for the project</span></td>
          <td>Experience with common Java APIs and framework
Experience with Restful API design and development
Experience with Java based Web frameworks like Spring.</td>
<td><button type="button" className="btn btn-outline-info btn-rounded"><span className="fw-bolder text-dark">View</span></button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Java Backend Developer</td>
          <td>Althan Travis LTD</td>
          <td><span className="ms-1">Delivering next-generation features in small, high-performing teams Collaborating with other developers to write the best code for the project</span></td>
          <td>Experience with common Java APIs and framework
Experience with Restful API design and development
Experience with Java based Web frameworks like Spring.</td>
<td><button type="button" className="btn btn-outline-info btn-rounded"><span className="fw-bolder text-dark">View</span></button></td>
        </tr>
    
      </tbody>
    </table>
  </div>
</div>

    </div>
  )
}
