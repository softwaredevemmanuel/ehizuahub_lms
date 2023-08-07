
import StudentLogin from "./components/StudentLogin";
import StaffLogin from "./components/StaffLogin";
import { Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./components/Home";
import StudentDashboard from "./components/StudentDashboard";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/studentlogin' element={<StudentLogin />}/>
        <Route path='/stafflogin' element={<StaffLogin />}/>
        <Route path='/studentdashboard/:id' element={<StudentDashboard />}/>
      </Routes>
    </div>
  );
};

export default App;
