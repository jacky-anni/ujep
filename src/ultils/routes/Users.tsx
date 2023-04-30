import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// users
const Users = lazy(() =>
  import("../../pages/users/Users").then(({ Users }) => ({
    default: Users,
  }))
);

const CreateUsers = lazy(() =>
  import("../../pages/users/CreateUsers").then(({ CreateUsers }) => ({
    default: CreateUsers,
  }))
);

const EditUsers = lazy(() =>
  import("../../pages/users/EditUsers").then(({ EditUsers }) => ({
    default: EditUsers,
  }))
);

export const UsersRoutes = (): any => {
  <>
    <Routes>
      <Route path='/dashbord/users' element={<Users />} />
      <Route path='/dashbord/add-users' element={<CreateUsers />} />
      <Route path='/dashbord/edit-users/:user' element={<EditUsers />} />
    </Routes>
  </>;
};
