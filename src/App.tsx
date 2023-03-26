import React, { Suspense, useRef } from "react";
import Main from "./components/layout/Main";
import { Routes, Route } from "react-router-dom";
import LoginLayout from "./components/layout/LoginLayout";
import { Loader } from "./components/layout/Loader";
// import Students from "./pages/students/Students";
import AddStudentsInfoSupp from "./pages/students/AddStudentsInfoSupp";

import {
  Faculties,
  Users,
  ShowFaculties,
  Students,
  CreateStudents,
  EditStudents,
  CreateEmpoyee,
  CreateUsers,
  EditUsers,
  EmployeeProfile,
  Home,
  Profile,
  Employees,
  EditEmpoyee,
  CreateFaculty,
  EditFaculty,
  Login,
} from "./ultils/routes";
import { Preloader } from "./components/layout/Preloader";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/dashbord' element={<Main />}>
          <Route
            path=''
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/employees'
            element={
              <Suspense fallback={<Loader />}>
                <Employees />
              </Suspense>
            }
          />
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
            path='/dashbord/add-users'
            element={
              <Suspense fallback={<Loader />}>
                <CreateUsers />
              </Suspense>
            }
          />
          <Route
            path='/dashbord/edit-users/:user'
            element={
              <Suspense fallback={<Loader />}>
                <EditUsers />
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

          <Route
            path='/dashbord/add-students-infos/:student'
            element={
              <Suspense fallback={<Loader />}>
                <AddStudentsInfoSupp />
              </Suspense>
            }
          />
          <Route
            path='/dashbord/profile-students/:student'
            element={
              <Suspense fallback={<Loader />}>
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
              <Suspense fallback={<Loader />}>
                <CreateEmpoyee />
              </Suspense>
            }
          />
          <Route
            path='/dashbord/employee/profile/:employee'
            element={
              <Suspense fallback={<Loader />}>
                <EmployeeProfile />
              </Suspense>
            }
          />

          <Route
            path='/dashbord/edit-employee/:id'
            element={
              <Suspense fallback={<Loader />}>
                <EditEmpoyee />
              </Suspense>
            }
          />
        </Route>

        <Route path='/' element={<LoginLayout />}>
          <Route
            path=''
            element={
              <Suspense fallback={<Preloader />}>
                <Login />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
