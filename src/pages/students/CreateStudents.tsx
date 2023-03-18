import React from "react";
import { AppTitle } from "../../components/partials/AppTitle";
import { CreateStudentsForm } from "../../components/students/CreateStudentsForm";

export const CreateStudents = () => {
  return (
    <>
      <AppTitle title={"Ajouter un (e) étudiant (e)"} img={"users"} />
      <div className='bg-white'>
        <div className='col-md-12 p-2'>
          <CreateStudentsForm />
        </div>
      </div>
    </>
  );
};
