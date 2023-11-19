import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminLogin from './AdminLogin';
import AdminCreateText from './AdminCreateText';

function AdminRouter() {
  return (
    <Routes>
        <Route  path="/" element={<AdminLogin />} />
        <Route path="/index" element={<AdminCreateText />} /> 
    </Routes>
  )
}

export default AdminRouter
