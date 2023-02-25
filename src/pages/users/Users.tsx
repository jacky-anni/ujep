import React from "react";
import { UserList } from "./../../components/users/UserList";
import AppTitle from "./../../components/partials/AppTitle";
import { Link } from "react-router-dom";

export const Users = () => {
  return (
    <>
      <AppTitle title={"Utilisateurs"} />
      <div className='row'>
        <div className='card'>
          <div className='row justify-content-between mb-2'>
            <UserList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
