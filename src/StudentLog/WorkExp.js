import { useState } from "react"
import "../Css/studentresume.css"

export default function WorkExp() {
    const [Designation, seatDesignation] = useState("")
    const [Organization, setOrganization] = useState("")
    const [Fdate, setFdate] = useState("")
    const [Ldate, setLdate] = useState("")
    const [Experience, setExperience] = useState("")
    const [ProjDetails, setProjDetails] = useState("")

    const [drlist, setdrlist] = useState([
        { id: 1, name: "Rohan" },
        { id: 2, name: "Raj" },
        { id: 2, name: "Ram" }
    ])
    const save = function () {
        var data =
        {
            Designation: Designation,
            Organization: Organization,
            Fdate: Fdate,
            Ldate: Ldate,
            Experience: Experience,
            ProjDetails: ProjDetails

        }
        console.log(data)
    }



    return (
        <div className="mt-4">
            <div className="text-center" style={{ height: "10vh" }}>
                <h4 className="mt-2 ">Work Experience</h4>
            </div>

            <div className="container-fluid justify-content-center">
                <table>
                    <tr>
                        <td>
                            <h5 >Enter Designation<span className="text-danger"> *</span></h5>
                            <input type="text"
                                value={Designation}
                                placeholder="Enter Designation"
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                onChange={(event) => seatDesignation(event.target.value)}>
                            </input>
                        </td>
                        <td>
                            <h5>Organization<span className="text-danger"> *</span></h5>
                            <input type="text"
                                value={Organization}
                                placeholder="Enter First Name"
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                onChange={(event) => setOrganization(event.target.value)}>
                            </input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h5>From Date<span className="text-danger"> *</span></h5>
                            <input type="date"
                                value={Fdate}
                                placeholder="Enter Middle Name "
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                onChange={(event) => setFdate(event.target.value)}>
                            </input>
                        </td>
                        <td>
                            <h5>Last Date<span className="text-danger"> *</span></h5>
                            <input type="date"
                                value={Ldate}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter Model"
                                required=""
                                onChange={(event) => setLdate(event.target.value)}>
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>Experience (in Years)<span className="text-danger"> *</span></h5>
                            <input type="number"
                                value={Experience}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter price"
                                required=""
                                onChange={(event) => setExperience(event.target.value)}>
                            </input>
                        </td>
                        
                    </tr>
                    
                </table>
                <div className="textar form-floating">
                    <h5>Nature of Work<span className="text-danger" > *</span></h5>
                    <textarea className="inputform form-control" id="floatingTextarea" style={{ width: "500px",height:"100px" }} onChange={(event) => setProjDetails(event.target.value)}></textarea>
                </div>

                <div className="text-center">
                    <button onClick={save} className="btn btn-primary mt-3">Save</button>
                </div>

            </div>

        </div>



    )
}
