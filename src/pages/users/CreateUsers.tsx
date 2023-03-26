import React from "react";
import { AppTitle } from "../../components/partials/AppTitle";
import { CreateUsersForm } from "../../components/users/AddUsersForm";

export const CreateUsers = () => {
  return (
    <>
      <AppTitle title={"Ajouter un utilisateur"} img={"users"} />
      <div className='bg-white'>
        <div className='col-md-12 p-2'>
          <CreateUsersForm />
        </div>
      </div>
    </>
  );
};
