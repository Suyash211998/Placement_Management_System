import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateStudent from '../Institute/CreateStudent'
import InstituteHome from '../Institute/InstituteHome'
import InterestedCompnies from '../Institute/InterestedCompnies'
import JobDisplay from '../Institute/JobDisplay'
import Home from "../pages/Home"
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
      </Routes>
      </BrowserRouter>
    </div>
  )
}
