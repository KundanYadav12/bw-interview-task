import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import Instruction from './pages/Instruction';
import Test from './pages/Test';
import SubmitPreview from './pages/SubmitPreview';
// import ThankYou from './pages/ThankYou';
import Report from './pages/Report';
import { Navigate } from 'react-router-dom';

const AppRoutes = () => (
  <Router>
    <Routes>
    <Route path="/" element={<Navigate to="/exam/registration/my-theme" replace />} />

      <Route path="/exam/registration/my-theme" element={<Registration />} />
      <Route path="/exam/instruction/my-theme" element={<Instruction />} /> 
      <Route path="/exam/test/my-theme" element={<Test />} />
      <Route path="/exam/submit/my-theme" element={<SubmitPreview />} />
      {/* <Route path="/thank-you" element={<ThankYou />} /> */}
      <Route path="/exam/report/my-theme" element={<Report />} /> 
    </Routes>
  </Router>
);

export default AppRoutes;
