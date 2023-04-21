import React from "react";

// users
export const Users = React.lazy(() =>
  import("../pages/users/Users").then(({ Users }) => ({
    default: Users,
  }))
);

export const CreateUsers = React.lazy(() =>
  import("../pages/users/CreateUsers").then(({ CreateUsers }) => ({
    default: CreateUsers,
  }))
);

export const EditUsers = React.lazy(() =>
  import("../pages/users/EditUsers").then(({ EditUsers }) => ({
    default: EditUsers,
  }))
);

//============================================================================================

// students
export const Students = React.lazy(() =>
  import("../pages/students/Students").then(({ Students }) => ({
    default: Students,
  }))
);

// add students
export const CreateStudents = React.lazy(() =>
  import("../pages/students/CreateStudents").then(({ CreateStudents }) => ({
    default: CreateStudents,
  }))
);

// edit students
export const AddStudentsInfoSupp = React.lazy(() =>
  import("../pages/students/AddStudentsInfoSupp").then(
    ({ AddStudentsInfoSupp }) => ({
      default: AddStudentsInfoSupp,
    })
  )
);

// add supp. information
export const EditStudents = React.lazy(() =>
  import("../pages/students/EditStudents").then(({ EditStudents }) => ({
    default: EditStudents,
  }))
);

// profile
export const Profile = React.lazy(() =>
  import("../pages/students/Profile").then(({ Profile }) => ({
    default: Profile,
  }))
);
//================================================================================================
//============================================================================================
// faculties
export const Faculties = React.lazy(() =>
  import("../pages/faculties/Faculties").then(({ Faculties }) => ({
    default: Faculties,
  }))
);

export const CreateFaculty = React.lazy(() =>
  import("../pages/faculties/CreateFaculty").then(({ CreateFaculty }) => ({
    default: CreateFaculty,
  }))
);

export const EditFaculty = React.lazy(() =>
  import("../pages/faculties/EditFaculty").then(({ EditFaculty }) => ({
    default: EditFaculty,
  }))
);

export const ShowFaculties = React.lazy(() =>
  import("../pages/faculties/ShowFaculties").then(({ ShowFaculties }) => ({
    default: ShowFaculties,
  }))
);
//============================================================================================

// employeee
export const CreateEmpoyee = React.lazy(() =>
  import("../pages/employees/CreateEmpoyee").then(({ CreateEmpoyee }) => ({
    default: CreateEmpoyee,
  }))
);

// employeee
export const EditEmpoyee = React.lazy(() =>
  import("../pages/employees/EditEmpoyee").then(({ EditEmpoyee }) => ({
    default: EditEmpoyee,
  }))
);

export const EmployeeProfile = React.lazy(() =>
  import("../pages/employees/EmployeeProfile").then(({ EmployeeProfile }) => ({
    default: EmployeeProfile,
  }))
);

export const Employees = React.lazy(() =>
  import("../pages/employees/Employees").then(({ Employees }) => ({
    default: Employees,
  }))
);

//==============================================================================================
// HOME
export const Home = React.lazy(() =>
  import("../pages/Home").then(({ Home }) => ({
    default: Home,
  }))
);
//==============================================================================================
// Login
export const Login = React.lazy(() =>
  import("../pages/Login").then(({ Login }) => ({
    default: Login,
  }))
);

//==============================================================================================
// courses
export const Courses = React.lazy(() =>
  import("../pages/courses/Courses").then(({ Courses }) => ({
    default: Courses,
  }))
);

// show course
export const ShowCourse = React.lazy(() =>
  import("../pages/courses/ShowCourse").then(({ ShowCourse }) => ({
    default: ShowCourse,
  }))
);

// teachers
export const Teachers = React.lazy(() =>
  import("../pages/teachers/Teachers").then(({ Teachers }) => ({
    default: Teachers,
  }))
);
