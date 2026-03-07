import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./AUTH/Login";

// import PatientRegister from "./PATIENT/pages/Register";
// import PatientDashboard from "./PATIENT/pages/Dashboard";

// import DoctorRegister from "./DOCTOR/pages/Register";
// import DoctorDashboard from "./DOCTOR/pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        {/* <Route path="/patient/register" element={<PatientRegister />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />

        <Route path="/doctor/register" element={<DoctorRegister />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;