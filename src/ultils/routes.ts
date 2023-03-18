import React from "react";

// users
export const Users = React.lazy(() =>
  import("../pages/users/Users").then(({ Users }) => ({
    default: Users,
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
export const EditStudents = React.lazy(() =>
  import("../pages/students/EditStudents").then(({ EditStudents }) => ({
    default: EditStudents,
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

export const CreateFaculte = React.lazy(() =>
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
