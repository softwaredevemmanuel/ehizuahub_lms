import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mainlayout } from './Components';
import {StudentLogin, TutorDashboard, TestPage, AdminLogin, AdminDashboard, StudentDashboard} from './Pages/'
// import AllCourses from './Pages/AllCourses';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Mainlayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path='tutor_dashboard' element={<TutorDashboard />} />
          <Route path='student_login' element={<StudentLogin />} />
          <Route path='admin_login' element={<AdminLogin />} />
          <Route path='student_dashboard' element={<AdminDashboard />} />
          <Route path='test' element={<TestPage />} />


        </Route>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
