import React from "react";
import { AppTitle } from "../../components/partials/AppTitle";
import { CreateFacultyForm } from "./../../components/faculties/Ui/CreateFacultyForm";

export const CreateFaculty = () => {
  return (
    <>
      <AppTitle title={"Ajouter une faculté"} img={"users"} />
      <div className='bg-white'>
        <div className='col-md-12 p-2'>
          <CreateFacultyForm />
        </div>
      </div>
    </>
  );
};
