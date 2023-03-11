import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateStudent from '../Institute/CreateStudent'
import InstituteHome from '../Institute/InstituteHome'
import InstituteProfile from '../Institute/InstituteProfile'
import InterestedCompnies from '../Institute/InterestedCompnies'
import JobDisplay from '../Institute/JobDisplay'

import Career from '../pages/Career'
import Contact from '../pages/Contact'
import Home from "../pages/Home"
import RecruiterHome from '../recruiter/RecruiterHome'
import StudentHome from '../Student/StudentHome'

import Academicinfo from '../StudentLog/Academicinfo'
import ExtraActivities from '../StudentLog/ExtraActivities'
import HomeResume from '../StudentLog/Home'
import Personainfo from '../StudentLog/Personainfo'
import ProjDetails from '../StudentLog/ProjDetails'
import Skills from '../StudentLog/Skills'
import WorkExp from '../StudentLog/WorkExp'

export default function RoutePage() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path='/institutehome' element={<InstituteHome/>} />
        <Route path='/institutehome/createstudent' element={<CreateStudent/>} />
        <Route path='/institutehome/jobdisplay' element={<JobDisplay/>} />
        <Route path='/institutehome/interestedcompanies' element={<InterestedCompnies/>} />
        <Route path='/recruiterhome' element={<RecruiterHome/>} />
        <Route path='/contact' element={<Contact/>} />
        
        <Route path='/career' element={<Career/>} />
        <Route path='/instituteprofile' element={<InstituteProfile/>} />
        <Route path='/studenthome' element={<StudentHome/>} />

        <Route path='/createresume' element={<HomeResume/>}>
        <Route path='/createresume/Personaldetail' element={<Personainfo/>} />
        <Route path='/createresume/Academicdetails' element={<Academicinfo/>} />
        <Route path='/createresume/ProjectDetails' element={<ProjDetails/>} />
        <Route path='/createresume/WorkExperience' element={<WorkExp/>} />
        <Route path='/createresume/Skills' element={<Skills/>}  />
        <Route path='/createresume/ExtraActivities' element={<ExtraActivities/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
