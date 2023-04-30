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
  Courses,
  Teachers,
  ShowCourse,
  ShowTeacher,
  EditTeacher,
  Catalogs,
  CatalogsCourseByFac,
} from "./ultils/routes";
import { Preloader } from "./components/layout/Preloader";
import { CreateTeacher } from "./pages/teachers/CreateTeacher";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/dashbord' element={<Main />}>
          <Route path='' element={<Home />} />
          <Route path='/dashbord/employees' element={<Employees />} />
          <Route path='/dashbord/students' element={<Students />} />
          <Route path='/dashbord/faculties' element={<Faculties />} />
          <Route
            path='/dashbord/faculty/:idFaculty'
            element={<ShowFaculties />}
          />
          <Route path='/dashbord/faculty/create' element={<CreateFaculty />} />
          <Route
            path='/dashbord/faculty/edit/:idFaculty'
            element={<EditFaculty />}
          />
          <Route path='/dashbord/users' element={<Users />} />
          <Route path='/dashbord/add-users' element={<CreateUsers />} />
          <Route path='/dashbord/edit-users/:user' element={<EditUsers />} />
          <Route path='/dashbord/add-students' element={<CreateStudents />} />

          <Route
            path='/dashbord/add-students-infos/:student'
            element={<AddStudentsInfoSupp />}
          />
          <Route
            path='/dashbord/profile-students/:student'
            element={<Profile />}
          />
          <Route
            path='/dashbord/edit-students/:student'
            element={<EditStudents />}
          />
          <Route path='/dashbord/add-employee' element={<CreateEmpoyee />} />
          <Route
            path='/dashbord/employee/profile/:employee'
            element={<EmployeeProfile />}
          />

          <Route path='/dashbord/edit-employee/:id' element={<EditEmpoyee />} />

          <Route path='/dashbord/courses' element={<Courses />} />

          <Route path='/dashbord/course/:idCourse' element={<ShowCourse />} />

          <Route path='/dashbord/teachers' element={<Teachers />} />

          <Route path='/dashbord/teacher/create' element={<CreateTeacher />} />

          <Route
            path='/dashbord/teacher/profile/:idTeacher'
            element={<ShowTeacher />}
          />

          <Route
            path='/dashbord/teacher/edit/:idTeacher'
            element={<EditTeacher />}
          />

          <Route path='/dashbord/catalogs' element={<Catalogs />} />

          <Route
            path='/dashbord/catalogs/faculty/:idFaculty'
            element={<CatalogsCourseByFac />}
          />
        </Route>
      </Routes>

      <Routes>
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
