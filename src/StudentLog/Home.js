import "../Css/studentresume.css"
import { Outlet, Link } from "react-router-dom";
function HomeResume() {
    return (
        <div className="Wrapper">
            <div className="row">
                <div className="col-3 sidebar" >
                    <nav className="nav flex-column mt-5 ms-3">
                        <Link class="nav-link sidebar-menu" to="/createresume/Personaldetail">
                            <span class="material-symbols-rounded me-3">
                                edit_note
                            </span>
                            <span className="align-top">Personal Details</span>
                        </Link>

                        <Link className="nav-link sidebar-menu" to="/createresume/Academicdetails">
                            <span class="material-symbols-outlined me-3">
                                account_balance
                            </span>
                            <span className="align-top">Academic Details</span>
                        </Link>

                        <Link className="nav-link sidebar-menu" to="/createresume/ProjectDetails">
                            <span className="material-icons-outlined me-3">
                                list_alt
                            </span>
                            <span className="align-top">Project Details</span>
                        </Link>

                        <Link className="nav-link sidebar-menu" to="/createresume/Skills">
                            <span class="material-symbols-outlined me-3">
                                edit_square
                            </span>
                            <span className="align-top">Skills</span>
                        </Link>
                        <Link className="nav-link sidebar-menu" to="/createresume/ExtraActivities">
                            <span class="material-symbols-outlined me-3">
                                bookmark_manager
                            </span>
                            <span className="align-top">Extra Curricular Activities</span>
                        </Link>
                        <div style={{ height: "30vh" }}></div>
                        <Link className="nav-link sidebar-menu" to="/studenthome">
                            <span class="material-symbols-outlined me-3">
                                logout
                            </span>
                            <span className="align-top">Home</span>
                        </Link>

                    </nav>
                </div>
                <div className="col-9">
                    <Outlet />

                </div>
            </div>
        </div>


    )
}

export default HomeResume