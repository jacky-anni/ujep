import React, { Suspense, useRef } from "react";
import Main from "./components/layout/Main";
import { Routes, Route } from "react-router-dom";
import AddEmpoyee from "./components/employee/AddEmpoyee";
import EditEmpoyee from "./components/employee/EditEmpoyee";
import Employees from "./pages/employees/Employees";
import Login from "./pages/Login";
import LoginLayout from "./components/layout/LoginLayout";
import Home from "./pages/Home";

import { Loader } from "./components/layout/Loader";
// students list

// import Students from "./pages/students/Students";
import AddStudents from "./components/students/AddStudents";
import AddStudentsInfoSupp from "./components/students/AddStudentsInfoSupp";
import Profile from "./pages/students/Profile";
import EditStudents from "./components/students/EditStudents";
import EditStudentsInfoSupp from "./components/students/EditStudentsInfoSupp";

// users
import { Faculties, Users } from "./components/ultils/routes";
// students
import { Students } from "./components/ultils/routes";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/dashbord' element={<Main />}>
          <Route
            path=''
            element={
              <Suspense fallback={<h1>ssss</h1>}>
                <Home />
              </Suspense>
            }
          />
          <Route path='/dashbord/employees' element={<Employees />} />
          {/* <Route path='/dashbord/students' element={<Students />} /> */}

          <Route
            path='/dashbord/students'
            element={
              <Suspense fallback={<Loader />}>
                <Students />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/faculty'
            element={
              <Suspense fallback={<Loader />}>
                <Faculties />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/users'
            element={
              <Suspense fallback={<Loader />}>
                <Users />
              </Suspense>
            }
          />
          <Route
            path='/dashbord/add-students'
            element={
              <Suspense fallback={<h1>ssss</h1>}>
                <AddStudents />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/add-students-infos/:student'
            element={
              <Suspense fallback={<h1>ssss</h1>}>
                <AddStudentsInfoSupp />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/edit-students-infos/:student'
            element={
              <Suspense fallback={<h1>ssss</h1>}>
                <EditStudentsInfoSupp />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/profile-students/:student'
            element={
              <Suspense fallback={<h1>ssss</h1>}>
                <Profile />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/edit-students/:student'
            element={
              <Suspense fallback={<h1>ssss</h1>}>
                <EditStudents />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/add-employee'
            element={
              <Suspense fallback={<h1>ssss</h1>}>
                <AddEmpoyee />
              </Suspense>
            }
          />

          <Route path='/dashbord/edit-employee/:id' element={<EditEmpoyee />} />
        </Route>

        <Route path='/' element={<LoginLayout />}>
          <Route path='' element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
