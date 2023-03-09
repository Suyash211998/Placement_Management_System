import { useState } from "react"
import "../Css/studentresume.css"

function Personainfo() {
    const [Fname, seatFname] = useState("")
    const [Mname, setMname] = useState("")
    const [Lname, setLname] = useState("")
    const [mail, setmail] = useState("")
    const [phone, setphone] = useState("")
    const [state, setstate] = useState("")
    const [city, setcity] = useState("")
    const [date, setdate] = useState("")
    const [Address, setAddress] = useState("")

    const [drlist, setdrlist] = useState([
        { id: 1, name: "Rohan" },
        { id: 2, name: "Raj" },
        { id: 2, name: "Ram" }
    ])
    const save = function () {
        var data =
        {
            Fname: Fname,
            Mname: Mname,
            Lname: Lname,
            mail: mail,
            phone: phone,
            state: state,
            city: city,
            date: date,
            Address: Address

        }
        console.log(data)
    }



    return (
        <div className="mt-4">
            <div className="text-center" style={{ height: "10vh" }}>
                <h4 className="mt-2 ">Personal Details</h4>
            </div>

            <div className="container-fluid justify-content-center">
                <table>
                    <tr>
                        <td>
                            <h5 >First Name<span className="text-danger"> *</span></h5>
                            <input type="text"
                                value={Fname}
                                placeholder="Enter First Name"
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                onChange={(event) => seatFname(event.target.value)}>
                            </input>
                        </td>
                        <td>
                            <h5>Middle Name<span className="text-danger"> *</span></h5>
                            <input type="text"
                                value={Mname}
                                placeholder="Enter First Name"
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                onChange={(event) => setMname(event.target.value)}>
                            </input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h5>Last Name<span className="text-danger"> *</span></h5>
                            <input type="text"
                                value={Lname}
                                placeholder="Enter Middle Name "
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                onChange={(event) => setLname(event.target.value)}>
                            </input>
                        </td>
                        <td>
                            <h5>Email<span className="text-danger"> *</span></h5>
                            <input type="email"
                                value={mail}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter Model"
                                required=""
                                onChange={(event) => setmail(event.target.value)}>
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>Contact<span className="text-danger"> *</span></h5>
                            <input type="number"
                                value={phone}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter price"
                                required=""
                                onChange={(event) => setphone(event.target.value)}>
                            </input>
                        </td>
                        <td>
                            <h5>Birth Date<span className="text-danger"> *</span></h5>
                            <input type="date"
                                value={date}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter price"
                                required=""
                                onChange={(event) => setdate(event.target.value)}>
                            </input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>State<span className="text-danger"> *</span> </h5>
                            <input type="text"
                                value={state}
                                placeholder="Enter Middle Name "
                                className="form-control form-control-sm mb-3 inputform "
                                required="value"
                                onChange={(event) => setstate(event.target.value)}>
                            </input>
                        </td>
                        <td>
                            <h5>City<span className="text-danger"> *</span></h5>
                            <input type="text"
                                value={city}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter Model"
                                required=""
                                onChange={(event) => setcity(event.target.value)}>
                            </input>
                        </td>
                    </tr>
                </table>
                <div className="textar form-floating">
                    <h5>Address<span className="text-danger" > *</span></h5>
                    <textarea className="inputform form-control" id="floatingTextarea" style={{ width: "500px",height:"100px" }} onChange={(event) => setAddress(event.target.value)}></textarea>
                </div>

                <div className="text-center">
                    <button onClick={save} className="btn btn-primary mt-3">Save</button>
                </div>

            </div>

        </div>



    )
}
export default Personainfo