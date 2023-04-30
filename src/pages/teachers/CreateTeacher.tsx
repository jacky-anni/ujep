import React from "react";
import { AppTitle } from "../../components/partials/AppTitle";
import { CreateTeacherForm } from "../../components/teachers/CreateTeacherForm";

export const CreateTeacher = () => {
  return (
    <>
      <AppTitle title={"Ajouter un (e) professeur (e)"} img={"users"} />
      <div className='col-md-12 bg-white p-2'>
        <CreateTeacherForm />
      </div>
    </>
  );
};
