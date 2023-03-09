import { useState } from "react"

export default function ExtraActivities() {

    const[Objective,setObjective]=useState("");
    const[Achievement,setAchievement]=useState("");
    const[Certification,setCertification]=useState("");
    const[Intership,setIntership]=useState("");


    function save()
    {
        var data =
        {
            Objective:Objective,
            Achievement:Achievement,
            Certification:Certification,
            Intership:Intership

        }
        console.log(data)
    }
    return (
        <div className="continer-fluid" >
            <div className="text-center " style={{ height: "5vh" }}>
                <h4 className="mt-4">Extra Curricular Activities</h4>
            </div>

            <div className="form p-4">

                <div class="form-group shadow-textarea  ">
                    <p className="fs-5 border-bottom ">Carrer Objective</p>
                    <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..." onChange={(event)=>setObjective(event.target.value)}></textarea>
                </div>
                <div class="form-group shadow-textarea  ">
                    <p className="fs-5 border-bottom ">Academic Acheivements</p>
                    <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..." onChange={(event)=>setAchievement(event.target.value)}></textarea>
                </div>
                <div class="form-group shadow-textarea  ">
                    <p className="fs-5 border-bottom ">Certifications</p>
                    <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..." onChange={(event)=>setIntership(event.target.value)}></textarea>
                </div>
                <div class="form-group shadow-textarea  ">
                    <p className="fs-5 border-bottom ">Internships</p>
                    <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="3" placeholder="Write something here..." onChange={(event)=>setCertification(event.target.value)}></textarea>
                </div>
                <div className="text-center">
                    <button onClick={save} className="btn btn-primary mt-3">Save</button>
                </div>
                
            </div>





        </div>
    )
}