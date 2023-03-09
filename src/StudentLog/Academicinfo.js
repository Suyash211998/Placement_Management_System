import "../Css/studentresume.css"
import { useState } from "react"
export default function Academicinfo() {

  const [Specs, setSpecs] = useState("")
  const [Institute, setInstitute] = useState("")
  const [passyear, setpassyear] = useState("")
  const [marksobt, setmarksobt] = useState("")
  const [percentage, setpercentage] = useState("")
  const [totmarks, settotmarks] = useState("")
  const [cgpa, setcgpa] = useState("")
  const [qualification, setQualification] = useState("")


  const [drlist, setdrlist] = useState([
    { id: 1, name: "Rohan" },
    { id: 2, name: "Raj" },
    { id: 2, name: "Ram" }
  ])
  const save = function () {
    var data =
    {

      Specs: Specs,
      Institute: Institute,
      passyear: passyear,
      marksobt: marksobt,
      percentage: percentage,
      totmarks: totmarks,
      cgpa: cgpa,
      qualification: qualification


    }
    console.log(data)
  }



  return (
    <div className="mt-4">
      <div className="text-center" style={{ height: "10vh" }}>
        <h4 className="mt-2 ">Academic Details</h4>
      </div>

      <div className="container-fluid justify-content-center">
        <table >
          <tr>
            <td>
              <h5 >Board<span className="text-danger"> *</span></h5>
              <select className="form-select mb-3" onChange={(event) => setQualification(event.target.value)} >
                <option selected >Select Qualification </option>
                <option value="SSC">SSC</option>
                <option value="HSC">HSC</option>
                <option value="Diploma">Diploma</option>
                <option value="B.E">B.E/B.Tech</option>
                <option value="PostGradaute">Post Graduate</option>

              </select>
            </td>
            <td className="ps-4">
              <h5>Specialization<span className="text-danger"> *</span></h5>
              <input type="text"
                value={Specs}
                placeholder="Enter Specialization"
                className="form-control form-control-sm mb-3 inputform "
                required=""
                onChange={(event) => setSpecs(event.target.value)}>
              </input>
            </td>
          </tr>

          <tr>
            <td>
              <h5>Institute<span className="text-danger"> *</span></h5>
              <input type="text"
                value={Institute}
                placeholder="Enter Institute Name"
                className="form-control form-control-sm mb-3 inputform "
                required=""
                onChange={(event) => setInstitute(event.target.value)}>
              </input>
            </td>
            <td className="ps-4">
              <h5>Year of Passing<span className="text-danger"> *</span></h5>
              <input type="number"
                value={passyear}
                className="form-control form-control-sm mb-3 inputform"
                placeholder="Enter Passing Year"
                required=""
                onChange={(event) => setpassyear(event.target.value)}>
              </input>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Marks Obtained<span className="text-danger"> *</span></h5>
              <input type="number"
                value={marksobt}
                className="form-control form-control-sm mb-3 inputform"
                placeholder="Enter Obtained Marks"
                required=""
                onChange={(event) => setmarksobt(event.target.value)}>
              </input>
            </td>
            <td className="ps-4">
              <h5>Total Marks<span className="text-danger"> *</span></h5>
              <input type="number"
                value={totmarks}
                className="form-control form-control-sm mb-3 inputform"
                placeholder="Enter Total Marks"
                required=""
                onChange={(event) => settotmarks(event.target.value)}>
              </input>
            </td>
          </tr>
          <tr>
            <td>
              <h5>Percentage<span className="text-danger"> *</span> </h5>
              <input type="text"
                value={percentage}
                placeholder="% "
                className="form-control form-control-sm mb-3 inputform "
                required="value"
                onChange={(event) => setpercentage(event.target.value)}>
              </input>
            </td>
            <td className="ps-4">
              <h5>CGPA<span className="text-danger"></span> </h5>
              <input type="text"
                value={cgpa}
                placeholder="Enter CGPA if Applicable"
                className="form-control form-control-sm mb-3 inputform "
                required="value"
                onChange={(event) => setcgpa(event.target.value)}>
              </input>
            </td>

          </tr>
        </table>


        <div className="text-center">
          <button onClick={save} className="btn btn-primary mt-3">Save</button>
        </div>

      </div>

    </div>




  )
}