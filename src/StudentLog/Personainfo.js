import axios from "axios"
import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { useParams } from "react-router-dom"
import "../Css/studentresume.css"

function Personainfo() {
    const [Fname, seatFname] = useState("")
   const [mail, setmail] = useState("")
    const [phone, setphone] = useState("")
    const [city, setcity] = useState("")
    const [date, setdate] = useState("")
    const id = useParams();

    const [isModalOpened, setIsModalOpened] = useState(false);
  
    const openModal = () => {
      setIsModalOpened(true);
    };
    const closeModal = () => {
      setIsModalOpened(false);
    };


    const save = async function (e) {
        e.preventDefault();
        if(validate()){
            var data =
        {
            studentId:1,
            name:Fname,
            email: mail,
            phone: phone,
            location: city,
            birthDate: date,

        }
        const res = await axios.put("http://localhost:8080/student", data);
        if(res.status===200) {
            openModal();
            console.log("success");
        }
      
        }
        
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
                            <h5 >Name<span className="text-danger"> </span></h5>
                            <input type="text"
                                id="vname"
                                value={Fname}
                                placeholder="Enter Full Name"
                                className="form-control form-control-sm mb-3 inputform "
                                required=""
                                onChange={(event) => seatFname(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="name" style={{ color: 'red' }} ></label>
                        </td>
                        <td>
                            <h5>Email<span className="text-danger"> </span></h5>
                            <input type="email"
                                id="vemail"
                                value={mail}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter Email"
                                required=""
                                onChange={(event) => setmail(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="email" style={{ color: 'red' }} ></label>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h5>Contact<span className="text-danger"> </span></h5>
                            <input type="number"
                                id="vphone"
                                value={phone}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter phone"
                                required=""
                                onChange={(event) => setphone(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="phone" style={{ color: 'red' }} ></label>
                        </td>
                        <td>
                            <h5>Birth Date<span className="text-danger"> </span></h5>
                            <input type="date"
                                id="vbirthdate"
                                value={date}
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter The BirthDate"
                                required=""
                                onChange={(event) => setdate(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="birthdate" style={{ color: 'red' }} ></label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5>City<span className="text-danger"> </span></h5>
                            <input type="text"
                                value={city}
                                id="city"
                                className="form-control form-control-sm mb-3 inputform"
                                placeholder="Enter Location Name"
                                required=""
                                onChange={(event) => setcity(event.target.value)}>
                            </input>
                            <label className="form-label" htmlFor="form3Example1cg" id="location" style={{ color: 'red' }} ></label>
                        </td>
                    </tr>
                </table>

                <div className="text-center">
                    <button onClick={(e) => save(e)} className="btn btn-primary mt-3">Save</button>
                </div>

            </div>
            <Modal size="xxl" aria-labelledby="contained-modal-title-vcenter"
      centered show={isModalOpened} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Application form Sumbitted!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Done</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
          

        </div>



    )
}

function validate() {

    var name =
        document.getElementById("vname").value;

    var email =
        document.getElementById("vemail").value;

    var contact =
        document.getElementById("vphone").value;

    var city =
        document.getElementById("city").value;


    var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regContact = /^[789][0-9]{9}$/;


    var msg = document.getElementById("name");
    if (name === "" || !regName.test(name)) {
        msg.innerHTML = " *Please enter a valid name";
        return false;
    }
    msg.innerHTML = "";

    msg = document.getElementById("phone");
    if (contact === "" || !regContact.test(contact)) {
        msg.innerHTML = " *Please enter a valid phone number";
        return false;
    }
    msg.innerHTML = "";

    msg = document.getElementById("location");
    if (city === "" || !regName.test(city)) {
        msg.innerHTML = " *Please enter a valid name";
        return false;
    }
    msg.innerHTML = "";

    msg = document.getElementById("email");
    if (email === "" || !regEmail.test(email)) {
        msg.innerHTML = " *Please enter a valid email";
        return false;
    }

   

    return true;
}
export default Personainfo