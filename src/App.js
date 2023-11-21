import { useEffect, useState } from 'react';
import './App.css';
import DepartmentList from './components/departments/DepartmentList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorsList from './components/doctors/DoctorsList';
import { getDepartments } from './service/departmentServices';

function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route path="/" element={<DepartmentList />} />
        <Route path="/:department" element={<DoctorsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
