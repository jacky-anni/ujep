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
import AddStudentsInfoSupp from "./components/students/AddStudentsInfoSupp";
import Profile from "./pages/students/Profile";
import EditStudentsInfoSupp from "./components/students/EditStudentsInfoSupp";

import {
  Faculties,
  Users,
  ShowFaculties,
  Students,
  CreateStudents,
  EditStudents,
} from "./ultils/routes";
import { CreateFaculty } from "./pages/faculties/CreateFaculty";
import { EditFaculty } from "./pages/faculties/EditFaculty";

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

          <Route
            path='/dashbord/students'
            element={
              <Suspense fallback={<Loader />}>
                <Students />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/faculties'
            element={
              <Suspense fallback={<Loader />}>
                <Faculties />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/faculty/:idFaculty'
            element={
              <Suspense fallback={<Loader />}>
                <ShowFaculties />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/faculty/create'
            element={
              <Suspense fallback={<Loader />}>
                <CreateFaculty />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/faculty/edit/:idFaculty'
            element={
              <Suspense fallback={<Loader />}>
                <EditFaculty />
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
              <Suspense fallback={<Loader />}>
                <CreateStudents />
              </Suspense>
            }
          />

          {/* <Route
            path='/dashbord/edit-students/:student'
            element={
              <Suspense fallback={<Loader />}>
                <CreateStudents />
              </Suspense>
            }
          /> */}

          <Route
            path='/dashbord/add-students-infos/:student'
            element={
              <Suspense fallback={<Loader />}>
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
              <Suspense fallback={<Loader />}>
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
