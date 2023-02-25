import React from "react";

// users
export const Users = React.lazy(() =>
  import("../../pages/users/Users").then(({ Users }) => ({
    default: Users,
  }))
);

// students
export const Students = React.lazy(() =>
  import("../../pages/students/Students").then(({ Students }) => ({
    default: Students,
  }))
);

// faculty
export const Faculties = React.lazy(() =>
  import("../../pages/faculty/Faculties").then(({ Faculties }) => ({
    default: Faculties,
  }))
);
