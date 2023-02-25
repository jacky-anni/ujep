import React from "react";
import { FacultyList } from "../../components/faculties/FacultyList";
import { AppTitle } from "../../components/partials/AppTitle";

export const Faculties = () => {
  return (
    <>
      <div className='row '>
        <AppTitle title={"Les facultes"} img={"users"} />
        <div className='col-md-12 bg-white'>
          <FacultyList />
        </div>
      </div>
    </>
  );
};
