import React from "react";
import { CourseListCatalog } from "./../../components/catalogs/CourseListCatalog";
import { CourseAddedCatalog } from "./../../components/catalogs/CourseAddedCatalog";

export const AddCourseCatalog = () => {
  return (
    <>
      <div className='row p-2'>
        <div className='col-md-8 bg-white'>
          <CourseListCatalog />
        </div>
        <div className='col-md-4'>
          <CourseAddedCatalog />
        </div>
      </div>
    </>
  );
};
