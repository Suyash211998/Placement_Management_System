import "../Css/studentresume.css"
import { useState } from "react"
function ProjDetails() {
    const [Projtitle, setProjtitle] = useState("")
    const [Duration, setDuration] = useState("")
    const [projyear, setprojyear] = useState("")
    const [projdescription, setprojdescription] = useState("")
    const [qualification, setqualification] = useState("")


    const [drlist, setdrlist] = useState([
        { id: 1, name: "Rohan" },
        { id: 2, name: "Raj" },
        { id: 2, name: "Ram" }
    ])
    const save = function () {
        var data =
        {

            Projtitle: Projtitle,
            Duration: Duration,
            projyear: projyear,
            qualification: qualification


        }
        console.log(data)
    }


    return (
        <div className="mt-4">
            <div className="text-center" style={{ height: "10vh" }}>
                <h4 className="mt-2 ">Project Details</h4>
            </div>

            <div className="container-fluid justify-content-center">
                <table >
                    <tr>
                        <td>
                            <h5 >Board<span className="text-danger"> *</span></h5>
                            <select className="form-select mb-3" onChange={(event) => setqualification(event.target.value)} >
                                <option selected >Select Qualification </option>
                                <option value="SSC">B.E/B.Tech</option>
                                <option value="HSC">Post-Graduation</option>
                            </select>
                        </td>
                        <td className="ps-4">
                            <h5>Project Title<span className="text-danger"> *</span></h5>
                            <input type="text"
                                value={Projtitle}
                                placeholder="Enter Project Title"
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                onChange={(event) => setProjtitle(event.target.value)}>
                            </input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h5>Duration<span className="text-danger"> *</span></h5>
                            <input type="text"
                                value={Duration}
                                placeholder="Enter Duration Name"
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                onChange={(event) => setDuration(event.target.value)}>
                            </input>
                        </td>
                        <td className="ps-4">
                            <h5>Year<span className="text-danger"> *</span></h5>
                            <input type="number"
                                value={projyear}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter Year"
                                required=""
                                onChange={(event) => setprojyear(event.target.value)}>
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 >Platform used<span className="text-danger"> *</span></h5>
                            <select className="form-select mb-3" onChange={(event) => setqualification(event.target.value)} >
                                <option selected >Select Qualification </option>
                                <option value="C">C</option>
                                <option value="Cpp">C++</option>
                                <option value="Java">Java</option>
                                <option value="Python">Python</option>
                                <option value=".net">.net</option>
                                <option value="React">React</option>
                                <option value="Python">Python</option>
                                <option value=".net">.net</option>
                                <option value="React">React</option>
                            </select>
                        </td>
                    </tr>

                </table>
                <div className="textar form-floating mb-2">
                    <h5>Address<span className="text-danger" > *</span></h5>
                    <textarea className="inputform form-control" id="floatingTextarea" style={{ width: "500px", height: "100px" }} onChange={(event) => setprojdescription(event.target.value)}></textarea>
                </div>
                <div className="text-center">
                    <button onClick={save} className="btn btn-primary mt-3">Save</button>
                </div>

            </div>

        </div>




    )
}

export default ProjDetails;